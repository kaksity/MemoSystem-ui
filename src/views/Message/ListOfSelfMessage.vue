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
import { mdiTrashCan, mdiEye } from '@mdi/js'
import { useToast } from 'vue-toastification'
import { useRouter } from 'vue-router'
const tableHead = [
  'Title',
  'Date',
  'Action'
]

const router = useRouter()

const messages = ref([])

const toastMessage = useToast()

const isModalDangerActive = ref(false)

const messageId = ref('')

async function getSelfMessages () {
  try {
    const response = await Api.get('/messages/self')
    messages.value = response.data.messages
  } catch (error) {
    toastMessage.error(error.message)
  }
}

function deleteMessage (id) {
  Api.delete(`/messages/${id}`).then((response) => {
    toastMessage.success(response.message)
    getSelfMessages()
  }).catch((error) => {
    toastMessage.error(error.message)
  })
}

onMounted(async () => {
  await getSelfMessages()
})
</script>

<template>
  <div>
    <main-section>
      <card-component
        class="mb-6"
        title="List of Created Messages"
        has-table
      >
        <data-table
          :theads="tableHead"
        >
          <tr
            v-for="message in messages"
            :key="message.id"
          >
            <td data-label="Title">
              {{ message.title }}
            </td>
            <td data-label="Date">
              {{ message.date }}
            </td>
            <td class="actions-cell">
              <jb-buttons
                type="justify-start lg:justify-center"
                no-wrap
              >
                <jb-button
                  color="info"
                  :icon="mdiEye"
                  small
                  @click="router.push(`/message/${message.id}/view`)"
                />
                <jb-button
                  color="danger"
                  :icon="mdiTrashCan"
                  small
                  @click="isModalDangerActive = true, messageId = message.id"
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
      @confirm="deleteMessage(messageId)"
    >
      <p>Do you wish to delete this record?</p>
    </modal-box>
  </div>
</template>
