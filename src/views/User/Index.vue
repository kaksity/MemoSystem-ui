<script setup>
import { ref, onMounted } from 'vue'
import MainSection from '@/components/MainSection.vue'
// import Notification from '@/components/Notification.vue'
import DataTable from '@/components/DataTable.vue'
import CardComponent from '@/components/CardComponent.vue'
import Api from '@/api'
import ModalBox from '@/components/ModalBox.vue'
import JbButtons from '@/components/JbButtons.vue'
import JbButton from '@/components/JbButton.vue'
import { mdiTrashCan } from '@mdi/js'
import { useToast } from 'vue-toastification'

const tableHead = [
  'Full Name',
  'Username',
  'Role Name',
  'Action'
]

const users = ref([])

const toastMessage = useToast()

const isModalDangerActive = ref(false)

const userId = ref('')

async function getUsers () {
  try {
    const { data } = await Api.get('/users')
    users.value = data
  } catch (error) {
    toastMessage.error(error.message)
  }
}

function deleteUser (id) {
  Api.delete(`/users/${id}`).then(({ message }) => {
    toastMessage.success(message)
    getUsers()
  }).catch((error) => {
    toastMessage.error(error.detail)
  })
}

onMounted(async () => {
  await getUsers()
})
</script>

<template>
  <div>
    <main-section>
      <card-component
        class="mb-6"
        title="List of Users"
        has-table
      >
        <data-table
          :theads="tableHead"
        >
          <tr
            v-for="user in users"
            :key="user.id"
          >
            <td data-label="Full Name">
              {{ user.fullName }}
            </td>
            <td data-label="Username">
              {{ user.username }}
            </td>
            <td data-label="Role">
              {{ user.role.name }}
            </td>
            <td class="actions-cell">
              <jb-buttons
                type="justify-start lg:justify-center"
                no-wrap
              >
                <jb-button
                  color="danger"
                  :icon="mdiTrashCan"
                  small
                  @click="isModalDangerActive = true, userId = user.id"
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
      @confirm="deleteUser(userId)"
    >
      <p>Do you wish to delete this record?</p>
    </modal-box>
  </div>
</template>
