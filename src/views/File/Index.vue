<script setup>
import { ref, onMounted } from 'vue'
import MainSection from '@/components/MainSection.vue'
// import Notification from '@/components/Notification.vue'
import DataTable from '@/components/DataTable.vue'
import CardComponent from '@/components/CardComponent.vue'
import Api from '@/api'
import ModalBox from '@/components/ModalBox.vue'
import JbButtons from '@/components/JbButtons.vue'
import JbButton from '@/components/JbButton.vue'
import { mdiEye, mdiTrashCan, mdiUpload } from '@mdi/js'
import { useToast } from 'vue-toastification'
import CreateFileModal from './CreateFileModal.vue'
import ShowFileModal from './ShowFileModal.vue'
import { useRouter } from 'vue-router'
const tableHead = [
  'File Name',
  'File Number',
  'Created On'
]

const router = useRouter()

const selectedFile = ref({})
const files = ref([])

const toastMessage = useToast()

const isModalDangerActive = ref(false)
const isViewModalActive = ref(false)
const isCreateModalActive = ref(false)

const fileId = ref('')

async function getFiles () {
  try {
    const response = await Api.get('/files')
    files.value = response.data.files
  } catch (error) {
    console.log(error)
  }
}

function deleteFile (id) {
  Api.delete(`/files/${id}`).then((response) => {
    toastMessage.success(response.message)
    getFiles()
  }).catch((error) => {
    toastMessage.error(error.message)
  })
}

onMounted(async () => {
  await getFiles()
})
</script>

<template>
  <div>
    <main-section>
      <card-component
        class="mb-6"
        title="List of Files"
        has-table
      >
        <div
          class="bg-opacity-50 p-3 dark:bg-gray-800"
        >
          <span
            class="inline-block px-2 py-1 rounded-sm mr-2 text-sm"
          >
            <jb-buttons>
              <jb-button
                color="info"
                @click="isCreateModalActive = true"
                label="Create File"
              />
            </jb-buttons>
          </span>
        </div>
        <data-table
          :theads="tableHead"
        >
        <tr
          v-for="file in files"
          :key="file.id"
        >
          <td data-label="File Name">
            {{ file.name }}
          </td>
          <td data-label="File Number">
            {{ file.code }}
          </td>
          <td data-label="Created On">
            <small
              class="text-gray-500 dark:text-gray-400"
              :title="file.createdAt"
            >{{ file.createdAt }}</small>
          </td>
          <td class="actions-cell">
            <jb-buttons
              type="justify-start lg:justify-end"
              no-wrap
            >
              <jb-button
                color="info"
                :icon="mdiEye"
                small
                @click="(isViewModalActive = true, selectedFile = file)"
              />
              <jb-button
                color="primary"
                :icon="mdiUpload"
                small
                @click="router.push(`/files/${file.id}/uploads`)"
              />
              <jb-button
                color="danger"
                :icon="mdiTrashCan"
                small
                @click="isModalDangerActive = true, fileId = file.id"
              />
            </jb-buttons>
          </td>
        </tr>
        </data-table>
      </card-component>
    </main-section>
    <create-file-modal v-model="isCreateModalActive"/>
    <show-file-modal v-model="isViewModalActive" :selectedFile="selectedFile"/>

    <modal-box
      v-model="isModalDangerActive"
      large-title="Please confirm"
      button="danger"
      @confirm="deleteFile(fileId)"
      has-cancel
    >
      <p>Do you wish to delete this record?</p>
    </modal-box>
  </div>
</template>
