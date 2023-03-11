<script setup>
import { reactive, ref } from 'vue'
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
import { groupErrors } from '@/helpers'

const toastMessage = useToast()

const form = reactive({
  name: '',
  code: '',
  description: ''
})
const errors = ref([])

function clearInputs () {
  form.name = ''
  form.code = ''
  form.description = ''
}

function clearError () {
  errors.value = {}
}

async function submit () {
  try {
    clearError()
    const response = await Api.post('/files', form)
    toastMessage.success(response.message)
    clearInputs()
  } catch (error) {
    if (error.errors) {
      errors.value = groupErrors(error.errors, 'field')
    } else {
      toastMessage.error(error.detail)
    }
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
        <field
          label="File Name"
          :help="errors.name"
        >
          <control
            v-model="form.name"
          />
        </field>
        <divider />
        <field
          label="File Number"
          :help="errors.code"
        >
          <control
            v-model="form.code"
          />
        </field>
        <divider />
        <field
          label="File Description"
          :help="errors.description"
        >
          <control
            v-model="form.description"
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
