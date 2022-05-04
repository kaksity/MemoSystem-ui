<script setup>
import { ref, onMounted, reactive } from 'vue'
import MainSection from '@/components/MainSection.vue'
import DataTable from '@/components/DataTable.vue'
import CardComponent from '@/components/CardComponent.vue'
import Api from '@/api'
import ModalBox from '@/components/ModalBox.vue'
import Field from '@/components/Field.vue'
import Control from '@/components/Control.vue'
import Divider from '@/components/Divider.vue'
import JbButtons from '@/components/JbButtons.vue'
import JbButton from '@/components/JbButton.vue'
import { mdiEye, mdiTrashCan, mdiBallot } from '@mdi/js'
import { useToast } from 'vue-toastification'
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

const fileId = ref(routes.params.fileId)

const form = reactive({
  documentName: '',
  fileId: fileId,
  file: null
})

async function getFileDocuments (fileId) {
  try {
    const response = await Api.get(`/files/${fileId}/documents`)
    fileDocuments.value = response.data.fileDocuments
  } catch (error) {
    toastMessage.error(error.message)
  }
}

function onFileChange (e) {
  form.file = e.target.files || e.dataTransfer.files
}

function clearInputs () {
  form.documentName = ''
  form.file = null
}

async function submit () {
  if (form.documentName === '') {
    toastMessage.error('Document Name is required')
    return
  } else if (form.file === null) {
    toastMessage.error('Document is required')
    return
  }

  try {
    const uploadForm = new FormData()
    uploadForm.append('fileId', form.fileId)
    uploadForm.append('documentName', form.documentName)
    uploadForm.append('file', form.file[0])

    const response = await Api.post('/files/documents', uploadForm)

    toastMessage.success(response.message)
    await getFileDocuments(fileId.value)
    clearInputs()
  } catch (error) {
    toastMessage.error(error.message)
  }
}

function openFileToView (url) {
  window.open(url)
}
async function deleteFileDocument (id) {
  try {
    const response = await Api.delete(`/files/documents/${id}`)
    toastMessage.success(response.message)
    await getFileDocuments(fileId.value)
  } catch (error) {
    toastMessage.error(error.message)
  }
}

onMounted(async () => {
  await getFileDocuments(fileId.value)
})
</script>

<template>
  <div>
    <main-section>
      <card-component
        title="Create File"
        :icon="mdiBallot"
        form
        @submit.prevent="submit"
      >
        <field label="Document Name">
          <control
            v-model="form.documentName"
            placeholder="Enter the name of document"
          />
        </field>
        <divider />
        <field label="Document">
          <control
            type="file"
            placeholder="Enter the name of document"
            @change="onFileChange"
          />
        </field>
        <divider />
        <divider />
        <jb-buttons>
          <jb-button
            type="submit"
            color="info"
            label="Send"
          />
        </jb-buttons>
      </card-component>
    </main-section>
    <main-section>
      <card-component
        class="mb-6"
        title="List of Documents"
        has-table
      >
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
    <modal-box
      v-model="isModalDangerActive"
      large-title="Please confirm"
      button="danger"
      has-cancel
      @confirm="deleteFileDocument(fileDocumentId)"
    >
      <p>Do you wish to delete this record?</p>
    </modal-box>
  </div>
</template>
