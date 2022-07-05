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
  article: '',
  quantity: '',
  code: ''
})

function clearInputs () {
  form.article = ''
  form.quantity = ''
  form.code = ''
}

async function submit () {
  try {
    if (form.article === '') {
      toastMessage.error('Inventory Article is required')
      return
    } else if (form.code === '') {
      toastMessage.error('Inventory Code is required')
      return
    } else if (form.quantity === '') {
      toastMessage.error('Inventory Quantity is required')
      return
    }
    const response = await Api.post('/inventories', form)
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
        title="Create Inventory"
        :icon="mdiBallot"
        form
        @submit.prevent="submit"
      >
        <field label="Inventory Article">
          <control
            v-model="form.article"
          />
        </field>
        <divider />
        <field label="Inventory Code">
          <control
            v-model="form.code"
          />
        </field>
        <divider />
        <field
          label="Inventory Quantity"
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
