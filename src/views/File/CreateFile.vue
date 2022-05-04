<script setup>
import { reactive } from 'vue'
import { mdiBallot } from '@mdi/js'
import MainSection from '@/components/MainSection.vue'
import CardComponent from '@/components/CardComponent.vue'
import Field from '@/components/Field.vue'
import Control from '@/components/Control.vue'
import Divider from '@/components/Divider.vue'
import JbButton from '@/components/JbButton.vue'
import JbButtons from '@/components/JbButtons.vue'
import Api from '@/api'
import { useToast } from 'vue-toastification'

const toastMessage = useToast()

const form = reactive({
  fileName: '',
  fileCode: '',
  fileDescription: ''
})

function clearInputs () {
  form.fileName = ''
  form.fileCode = ''
  form.fileDescription = ''
}

async function submit () {
  try {
    if (form.fileName === '') {
      toastMessage.error('File Name is required')
      return
    } else if (form.fileCode === '') {
      toastMessage.error('File Number is required')
      return
    } else if (form.fileDescription === '') {
      toastMessage.error('File Description is required')
    }
    const response = await Api.post('/files', form)
    toastMessage.success(response.message)
    clearInputs()
  } catch (error) {
    toastMessage.error(error.message)
  }
}
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
        <field label="File Name">
          <control
            v-model="form.fileName"
          />
        </field>
        <divider />
        <field label="File Number">
          <control
            v-model="form.fileCode"
          />
        </field>
        <divider />
        <field
          label="File Description"
        >
          <control
            v-model="form.fileDescription"
            row="3"
            type="textarea"
          />
        </field>
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
  </div>
</template>
