<script setup>
import { ref, onMounted, reactive } from 'vue'
import MainSection from '@/components/MainSection.vue'
import DataTable from '@/components/DataTable.vue'
import CardComponent from '@/components/CardComponent.vue'
import Api from '@/api'
import ModalBox from '@/components/ModalBox.vue'
import JbButtons from '@/components/JbButtons.vue'
import JbButton from '@/components/JbButton.vue'
import FPagination from '@/components/FPagination.vue'
import { mdiEye, mdiTrashCan, mdiUpload } from '@mdi/js'
import { useToast } from 'vue-toastification'
import { useRouter } from 'vue-router'
const tableHead = [
  'File Name',
  'File Number',
  'Created On'
]

const router = useRouter()

const files = ref([])

const toastMessage = useToast()

const isModalDangerActive = ref(false)

const fileId = ref('')

async function getFiles () {
  try {
    const { data, meta } = await Api.get('/files', { params })
    files.value = data
    paginationData.value = meta
  } catch (error) {
    toastMessage.error(error.detail)
  }
}
async function goToNextPage() {
  params.page++
  await getSelfMemos()
}
async function goToPreviousPage() {
  params.page--
  await getSelfMemos()
}
async function goToCurrentPage(page) {
  params.page = page
  await getSelfMemos()
}
async function goToFirstPage() {
  params.page = paginationData.value.first_page
  await getSelfMemos()
}
async function goToLastPage() {
  params.page = paginationData.value.last_page
  await getSelfMemos()
}
const paginationData = ref({})

const params = reactive({
  page: 1,
  limit: 100
})

const currentPage = ref(1)


function deleteFile (id) {
  Api.delete(`/files/${id}`).then((response) => {
    toastMessage.success(response.message)
    getFiles()
  }).catch((error) => {
    toastMessage.error(error.detail)
  })
}

onMounted(async () => {
  await getFiles()
})
</script>

<template>
  <div>
    <main-section>
      <card-component
        class="mb-6"
        title="List of Files"
        has-table
      >
        <data-table
          :theads="tableHead"
        >
          <tr
            v-for="file in files"
            :key="file.id"
          >
            <td data-label="File Name">
              {{ file.name }}
            </td>
            <td data-label="File Number">
              {{ file.code }}
            </td>
            <td data-label="Created On">
              <small
                class="text-gray-500 dark:text-gray-400"
                :title="file.createdAt"
              >{{ file.createdOn }}</small>
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
                  @click="router.push(`/file/${file.id}/view`)"
                />
                <jb-button
                  color="primary"
                  :icon="mdiUpload"
                  small
                  @click="router.push(`/file/${file.id}/upload`)"
                />
                <jb-button
                  color="danger"
                  :icon="mdiTrashCan"
                  small
                  @click="isModalDangerActive = true, fileId = file.id"
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

    <modal-box
      v-model="isModalDangerActive"
      large-title="Please confirm"
      button="danger"
      has-cancel
      @confirm="deleteFile(fileId)"
    >
      <p>Do you wish to delete this record?</p>
    </modal-box>
  </div>
</template>
