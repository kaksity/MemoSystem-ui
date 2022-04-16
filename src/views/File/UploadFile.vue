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
import { mdiEye, mdiTrashCan } from '@mdi/js'
import { useToast } from 'vue-toastification'
import UploadFileModal from './UploadFileModal.vue'
import { useRoute } from 'vue-router'

const routes = useRoute()

const tableHead = [
  'Document',
  'Created On'
]

const fileDocuments = ref([])

const toastMessage = useToast()

const fileDocumentId = ref('')
const isModalDangerActive = ref(false)
const isUploadModalActive = ref(false)

const fileId = ref(routes.params.fileId)

async function getFileDocuments () {
  try {
    const response = await Api.get(`/files/${fileId.value}/documents`)
    fileDocuments.value = response.data.fileDocuments
  } catch (error) {
    console.log(error)
  }
}

function openFileToView (url) {
  window.open(url)
}
function deleteFileDocument (id) {
  Api.delete(`/files/documents/${id}`).then((response) => {
    toastMessage.success(response.message)
    getFileDocuments()
  }).catch((error) => {
    toastMessage.error(error.message)
  })
}

onMounted(async () => {
  await getFileDocuments()
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
                @click="isUploadModalActive = true"
                label="Create File"
              />
            </jb-buttons>
          </span>
        </div>
        <data-table
          :theads="tableHead"
        >
        <tr
          v-for="document in fileDocuments"
          :key="document.id"
        >
          <td data-label="Document">
            {{ document.name }}
          </td>
          <td data-label="Created On">
            <small
              class="text-gray-500 dark:text-gray-400"
              :title="document.createdAt"
            >{{ document.createdAt }}</small>
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
                @click="openFileToView(document.url)"
              />
              <jb-button
                color="danger"
                :icon="mdiTrashCan"
                small
                @click="isModalDangerActive = true, fileDocumentId = document.id"
              />
            </jb-buttons>
          </td>
        </tr>
        </data-table>
      </card-component>
    </main-section>
    <upload-file-modal v-model="isUploadModalActive" :fileId="fileId"/>
    <modal-box
      v-model="isModalDangerActive"
      large-title="Please confirm"
      button="danger"
      @confirm="deleteFileDocument(fileDocumentId)"
      has-cancel
    >
      <p>Do you wish to delete this record?</p>
    </modal-box>
  </div>
</template>
