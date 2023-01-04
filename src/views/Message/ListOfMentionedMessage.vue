<script setup>
import { ref, onMounted, reactive } from 'vue'
import MainSection from '@/components/MainSection.vue'
// import Notification from '@/components/Notification.vue'
import DataTable from '@/components/DataTable.vue'
import CardComponent from '@/components/CardComponent.vue'
import Api from '@/api'
import JbButtons from '@/components/JbButtons.vue'
import JbButton from '@/components/JbButton.vue'
import FPagination from '@/components/FPagination.vue'
import { mdiEye } from '@mdi/js'
import { useToast } from 'vue-toastification'
import { useRouter } from 'vue-router'
const tableHead = [
  'Title',
  'Date',
  'Created By',
  'Action'
]

const router = useRouter()

const messages = ref([])

const toastMessage = useToast()

const paginationData = ref({})

const params = reactive({
  page: 1,
  limit: 100
})
const currentPage = ref(1)

async function goToNextPage() {
  params.page++
  await getMentionedMessages()
}
async function goToPreviousPage() {
  params.page--
  await getMentionedMessages()
}
async function goToCurrentPage(page) {
  params.page = page
  await getMentionedMessages()
}
async function goToFirstPage() {
  params.page = paginationData.value.first_page
  await getMentionedMessages()
}
async function goToLastPage() {
  params.page = paginationData.value.last_page
  await getMentionedMessages()
}
async function getMentionedMessages () {
  try {
    const { data, meta } = await Api.get('/messages/mentions')
    messages.value = data
    paginationData.value = meta
  } catch (error) {
    toastMessage.error(error.detail)
  }
}

onMounted(async () => {
  await getMentionedMessages()
})
</script>

<template>
  <div>
    <main-section>
      <card-component
        class="mb-6"
        title="List of Mentioned Messages"
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
            <td data-label="Date">
              {{ message.user.fullName }}
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
              </jb-buttons>
            </td>
          </tr>
        </data-table>
        <FPagination
          :totalNumberOfPages="paginationData.last_page"
          :currentPage="currentPage"
          @go-to-first-page="goToFirstPage"
          @go-to-last-page="goToLastPage"
          @go-to-next-page="goToNextPage"
          @go-to-previous-page="goToPreviousPage"
          @go-to-current-page="goToCurrentPage"
        />
      </card-component>
    </main-section>
  </div>
</template>
