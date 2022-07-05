<script setup>
import { onMounted, reactive } from 'vue'
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
import { useRoute } from 'vue-router'

const toastMessage = useToast()
const route = useRoute()

const form = reactive({
  article: '',
  quantity: '',
  code: ''
})

async function getSingleInventory (id) {
  try {
    const { data } = await Api.get(`/inventories/${id}`)
    form.article = data.article
    form.quantity = data.quantity
    form.code = data.code
  } catch (error) {
    toastMessage.error(error.message)
  }
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
    const response = await Api.put(`/inventories/${route.params.inventoryId}`, form)
    await getSingleInventory(route.params.inventoryId)
    toastMessage.success(response.message)
  } catch (error) {
    toastMessage.error(error.message)
  }
}

onMounted(async () => {
  await getSingleInventory(route.params.inventoryId)
})
</script>
<template>
  <div>
    <main-section>
      <card-component
        title="Update Inventory"
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
            disabled
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
            label="Update"
          />
        </jb-buttons>
      </card-component>
    </main-section>
  </div>
</template>
