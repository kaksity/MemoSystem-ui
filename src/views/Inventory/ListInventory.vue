<script setup>
import { ref, onMounted } from 'vue'
import MainSection from '@/components/MainSection.vue'
import DataTable from '@/components/DataTable.vue'
import CardComponent from '@/components/CardComponent.vue'
import Api from '@/api'
import ModalBox from '@/components/ModalBox.vue'
import JbButtons from '@/components/JbButtons.vue'
import JbButton from '@/components/JbButton.vue'
import { mdiEye, mdiTrashCan } from '@mdi/js'
import { useToast } from 'vue-toastification'
import { useRouter } from 'vue-router'
const tableHead = [
  'Inventory Article',
  'Inventory Code',
  'Inventory Quantity'
]

const router = useRouter()

const inventories = ref([])

const toastMessage = useToast()

const isModalDangerActive = ref(false)

const inventoryId = ref('')

async function getInventories () {
  try {
    const response = await Api.get('/inventories')
    inventories.value = response
  } catch (error) {
    toastMessage.error(error.detail)
  }
}

function deleteInventory (id) {
  Api.delete(`/inventories/${id}`).then((response) => {
    toastMessage.success(response.message)
    getInventories()
  }).catch((error) => {
    toastMessage.error(error.detail)
  })
}

onMounted(async () => {
  await getInventories()
})
</script>

<template>
  <div>
    <main-section>
      <card-component
        class="mb-6"
        title="List of Inventories"
        has-table
      >
        <data-table
          :theads="tableHead"
        >
          <tr
            v-for="inventory in inventories"
            :key="inventory.id"
          >
            <td data-label="Inventory Article">
              {{ inventory.article }}
            </td>
            <td data-label="Inventory Code">
              {{ inventory.code }}
            </td>
            <td data-label="Inventory Quantity">
              {{ inventory.quantity }}
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
                  @click="router.push(`/inventory/${inventory.id}/view`)"
                />
                <jb-button
                  color="danger"
                  :icon="mdiTrashCan"
                  small
                  @click="isModalDangerActive = true, inventoryId = inventory.id"
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
      @confirm="deleteInventory(inventoryId)"
    >
      <p>Do you wish to delete this record?</p>
    </modal-box>
  </div>
</template>
