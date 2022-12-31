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
import { mdiTrashCan, mdiEye, mdiPencil, mdiMessage, mdiAttachment } from '@mdi/js'
import { useToast } from 'vue-toastification'
import { useRouter } from 'vue-router'
const tableHead = [
  'Title',
  'Date',
  'Action'
]

const router = useRouter()

const memos = ref([])

const toastMessage = useToast()

const isModalDangerActive = ref(false)

const memoId = ref('')

async function getSelfMemos () {
  try {
    const response = await Api.get('/memos/self')
    memos.value = response
  } catch (error) {
    toastMessage.error(error.detail)
  }
}

function deleteMemo (id) {
  Api.delete(`/memos/${id}`).then((response) => {
    toastMessage.success(response.message)
    getSelfMemos()
  }).catch((error) => {
    toastMessage.error(error.detail)
  })
}
onMounted(async () => {
  await getSelfMemos()
})
</script>

<template>
  <div>
    <main-section>
      <card-component
        class="mb-6"
        title="List of Created Memos"
        has-table
      >
        <data-table
          :theads="tableHead"
        >
          <tr
            v-for="memo in memos"
            :key="memo.id"
          >
            <td data-label="Title">
              {{ memo.title }}
            </td>
            <td data-label="Date">
              {{ memo.date }}
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
                  @click="router.push(`/memo/${memo.id}/view`)"
                />
                <jb-button
                  color="info"
                  :icon="mdiPencil"
                  small
                  @click="router.push(`/memo/${memo.id}/edit`)"
                />
                <jb-button
                  color="info"
                  :icon="mdiAttachment"
                  small
                  @click="router.push(`/memo/${memo.id}/attachments/self`)"
                />
                <jb-button
                  color="info"
                  :icon="mdiMessage"
                  small
                  @click="router.push(`/memo/${memo.id}/comments`)"
                />
                <jb-button
                  color="danger"
                  :icon="mdiTrashCan"
                  small
                  @click="isModalDangerActive = true, memoId = memo.id"
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
      @confirm="deleteMemo(memoId)"
    >
      <p>Do you wish to delete this record?</p>
    </modal-box>
  </div>
</template>
