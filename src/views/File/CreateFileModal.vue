<script setup>
import { reactive } from 'vue'
import Api from '@/api'
import ModalBox from '@/components/ModalBox.vue'
import Field from '@/components/Field.vue'
import Control from '@/components/Control.vue'
import { useToast } from 'vue-toastification'

const form = reactive({
  fileName: '',
  fileCode: '',
  fileDescription: ''
})

defineProps({
  showModal: {
    type: [Boolean],
    default: null
  }
})
const toastMessage = useToast()

async function createNewFile () {
  try {
    const response = await Api.post('/files', form)
    toastMessage.success(response.message)
  } catch (error) {
    toastMessage.error(error.message)
  }
}

</script>
<template>
  <modal-box
    :v-model="true"
    title="Create a new file"
    has-cancel
    @confirm="createNewFile"
  >
    <field label="File Name">
      <control
        v-model="form.fileName"
        placeholder="Enter the name of file"
      />
    </field>
    <field label="File Number">
      <control
        v-model="form.fileCode"
        placeholder="Enter the file number"
      />
    </field>
    <field
      label="File Description"
    >
      <control
        row="3"
        v-model="form.fileDescription"
        type="textarea"
        placeholder="Describe the purpose and content of the file"
      />
    </field>
  </modal-box>
</template>
