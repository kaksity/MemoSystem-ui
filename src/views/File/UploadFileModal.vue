<script setup>
import { reactive } from 'vue'
import Api from '@/api'
import ModalBox from '@/components/ModalBox.vue'
import Field from '@/components/Field.vue'
import Control from '@/components/Control.vue'
import { useToast } from 'vue-toastification'

const props = defineProps({
  fileId: String,
  showModal: {
    type: [Boolean],
    default: null
  }
})

const form = reactive({
  documentName: '',
  fileId: props.fileId,
  file: null
})

const toastMessage = useToast()

function onFileChange (e) {
  form.file = e.target.files || e.dataTransfer.files
}

async function uploadFile () {
  try {
    const uploadForm = new FormData()
    uploadForm.append('fileId', form.fileId)
    uploadForm.append('documentName', form.documentName)
    uploadForm.append('file', form.file[0])

    const response = await Api.post('/files/documents', uploadForm)

    toastMessage.success(response.message)
  } catch (error) {
    toastMessage.error(error.message)
  }
}

</script>
<template>
  <modal-box
    :v-model="true"
    title="Create a new document"
    has-cancel
    @confirm="uploadFile"
  >
    <field label="Document Name">
      <control
        v-model="form.documentName"
        placeholder="Enter the name of document"
      />
    </field>
    <field label="Document">
      <control
        @change="onFileChange"
        type="file"
        placeholder="Enter the name of document"
      />
    </field>
  </modal-box>
</template>
