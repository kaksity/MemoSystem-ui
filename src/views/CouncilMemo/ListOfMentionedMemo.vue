<script setup>
import { ref, onMounted, reactive } from 'vue'
import MainSection from '@/components/MainSection.vue'
// import Notification from '@/components/Notification.vue'
import DataTable from '@/components/DataTable.vue'
import CardComponent from '@/components/CardComponent.vue'
import Api from '@/api'
import JbButtons from '@/components/JbButtons.vue'
import JbButton from '@/components/JbButton.vue'
import { mdiEye, mdiMessage, mdiAttachment } from '@mdi/js'
import FPagination from '@/components/FPagination.vue'
import { useToast } from 'vue-toastification'
import { useRouter } from 'vue-router'
const tableHead = [
  'Title',
  'Date',
  'Action'
]

const router = useRouter()

const memos = ref([])
const paginationData = ref({})

const params = reactive({
  page: 1,
  limit: 100
})

const currentPage = ref(1)
const toastMessage = useToast()

async function goToNextPage () {
  params.page++
  await getMentionedMemos()
}
async function goToPreviousPage () {
  params.page--
  await getMentionedMemos()
}
async function goToCurrentPage (page) {
  params.page = page
  await getMentionedMemos()
}
async function goToFirstPage () {
  params.page = paginationData.value.first_page
  await getMentionedMemos()
}
async function goToLastPage () {
  params.page = paginationData.value.last_page
  await getMentionedMemos()
}

async function getMentionedMemos () {
  try {
    const { data, meta } = await Api.get('/memos/mentions')
    memos.value = data
    paginationData.value = meta
  } catch (error) {
    toastMessage.error(error.message)
  }
}

onMounted(async () => {
  await getMentionedMemos()
})
</script>

<template>
  <div>
    <main-section>
      <card-component
        class="mb-6"
        title="List of Mentioned Memos"
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
                  :icon="mdiAttachment"
                  small
                  @click="router.push(`/memo/${memo.id}/attachments/mentioned`)"
                />
                <jb-button
                  color="info"
                  :icon="mdiMessage"
                  small
                  @click="router.push(`/memo/${memo.id}/comments`)"
                />
              </jb-buttons>
            </td>
          </tr>
        </data-table>
        <FPagination
          :total-number-of-pages="paginationData.last_page"
          :current-page="currentPage"
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
