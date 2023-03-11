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
  article: '',
  quantity: '',
  code: ''
})
const errors = ref({})
function clearInputs () {
  form.article = ''
  form.quantity = ''
  form.code = ''
}
function clearErrors () {
  errors.value = {}
}
async function submit () {
  try {
    clearErrors()
    const response = await Api.post('/inventories', form)
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
        title="Create Inventory"
        :icon="mdiBallot"
        form
        @submit.prevent="submit"
      >
        <field
          label="Inventory Article"
          :help="errors.article"
        >
          <control
            v-model="form.article"
          />
        </field>
        <divider />
        <field
          label="Inventory Code"
          :help="errors.code"
        >
          <control
            v-model="form.code"
          />
        </field>
        <divider />
        <field
          label="Inventory Quantity"
          :help="errors.quantity"
        >
          <control
            v-model="form.quantity"
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
