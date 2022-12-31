<script setup>
import { onMounted, reactive, ref } from 'vue'
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
import { groupErrors } from '@/helpers';

const toastMessage = useToast()
const route = useRoute()

const form = reactive({
  article: '',
  quantity: '',
  code: ''
})
const errors = ref([])
async function getSingleInventory (id) {
  try {
    const data  = await Api.get(`/inventories/${id}`)
    form.article = data.article
    form.quantity = data.quantity
    form.code = data.code
  } catch (error) {
    toastMessage.error(error.detail)
  }
}
function clearErrors() {
  errors.value = {}
}
async function submit () {
  try {
    clearErrors()
    const response = await Api.put(`/inventories/${route.params.inventoryId}`, form)
    await getSingleInventory(route.params.inventoryId)
    toastMessage.success(response.message)
  } catch (error) {
    if(error.errors) {
      errors.value = groupErrors(error.errors, 'field')
    } else {
      toastMessage.error(error.detail)
    }
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
        <field label="Inventory Article" :help="errors.article">
          <control
            v-model="form.article"
          />
        </field>
        <divider />
        <field label="Inventory Code" :help="errors.code">
          <control
            v-model="form.code"
            disabled
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
            label="Update"
          />
        </jb-buttons>
      </card-component>
    </main-section>
  </div>
</template>
