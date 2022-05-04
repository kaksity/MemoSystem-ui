<script setup>
import { ref, onMounted, reactive } from 'vue'
import { mdiBallot } from '@mdi/js'
import MainSection from '@/components/MainSection.vue'
import CardComponent from '@/components/CardComponent.vue'
import Divider from '@/components/Divider.vue'
import Api from '@/api'
import { useToast } from 'vue-toastification'
import { useRoute } from 'vue-router'
import Field from '@/components/Field.vue'
import Control from '@/components/Control.vue'
import JbButton from '@/components/JbButton.vue'
import JbButtons from '@/components/JbButtons.vue'

const routes = useRoute()
const memo = ref({})
const receipients = ref([])
const users = ref([])
const selectedReceipients = ref([])
const memoComments = ref([])
const receipientSelectBox = ref({})
const toastMessage = useToast()
const memoId = ref(routes.params.memoId)

const form = reactive({
  comment: '',
  receipients: null
})

function setReceipient () {
  const isExist = selectedReceipients.value.find(t => t.receipient === receipientSelectBox.value.id)
  if (!isExist) {
    selectedReceipients.value.push({
      receipient: receipientSelectBox.value.id,
      name: receipientSelectBox.value.label
    })
  }
}
function removeSelectedReciepients (id) {
  const newSelectedReceipients = []
  selectedReceipients.value.forEach(item => {
    if (item.receipient !== id) {
      newSelectedReceipients.push(item)
    }
  })
  selectedReceipients.value = newSelectedReceipients
}
async function getMemoReceipients (memoId) {
  try {
    const response = await Api.get(`/memos/${memoId}/receipients`)
    receipients.value = response.data.receipients
  } catch (error) {
    toastMessage.error(error.message)
  }
}
async function getMemoDetails (memoId) {
  try {
    const response = await Api.get(`/memos/${memoId}`)
    memo.value = response.data.memo
  } catch (error) {
    toastMessage.error(error.message)
  }
}
async function getUsers () {
  try {
    const response = await Api.get('/users')
    response.data.forEach(element => {
      users.value.push({
        id: element.id,
        label: element.fullName
      })
    })
  } catch (error) {
    toastMessage.error(error.message)
  }
}

async function submitComment () {
  if (selectedReceipients.value.length === 0) {
    toastMessage.error('You must select at least 1 receipient')
    return
  }
  if (form.comment === '') {
    toastMessage.error('Comment is required')
    return
  }
  try {
    form.receipients = selectedReceipients
    const response = await Api.post(`/memos/${memoId.value}/comments`, form)

    toastMessage.success(response.message)
    await initializeData()
    clearInputFields()
  } catch (error) {
    toastMessage.error(error.message)
  }
}
async function getMemoComments (memoId) {
  try {
    const response = await Api.get(`/memos/${memoId}/comments`)
    memoComments.value = response.data.memoComments
  } catch (error) {
    toastMessage.error(error.message)
  }
}
async function deleteMemoComment (id) {
  try {
    const response = await Api.delete(`/memos/comments/${id}`)
    toastMessage.success(response.message)
    await getMemoComments(memoId.value)
  } catch (error) {
    toastMessage.error(error.message)
  }
}
function clearInputFields () {
  form.comment = ''
  selectedReceipients.value = []
}
async function initializeData () {
  await getMemoDetails(memoId.value)
  await getMemoComments(memoId.value)
  await getMemoReceipients(memoId.value)
}
onMounted(async () => {
  await initializeData()
  getUsers()
})

</script>
<template>
  <div>
    <main-section>
      <card-component
        title="Memo Details"
        :icon="mdiBallot"
        form
      >
        <field
          v-if="receipients.length"
          label="Recipients"
        >
          <span
            v-for="receipient in receipients"
            :key="receipient.receipient"
            class="inline-block px-2 py-1"
          >
            {{ receipient.user.fullName }}
          </span>
        </field>
        <divider />
        <field label="Memo Title">
          {{ memo.title }}
        </field>
        <divider />
        <field label="Date">
          {{ memo.date }}
        </field>
        <divider />
        <field label="Memo Comments">
          <div
            v-for="comment in memoComments"
            :key="comment.id"
          >
            <div class="px-2 py-1">
              <div class="">
                {{ comment.commentBy }} on <span class="text-sm">{{ comment.date }}</span> <button
                  class="inline-block bg-red-700 p-2 rounded-sm mr-2 text-white-700"
                  @click="deleteMemoComment(comment.id)"
                >
                  X
                </button>
              </div>
              <div class="text-gray-500">
                {{ comment.message }}
              </div>
            </div>
          </div>
        </field>
        <divider />
        <field label="Receipient">
          <control
            v-model="receipientSelectBox"
            :options="users"
            @change="setReceipient"
          />
        </field>
        <div
          v-if="selectedReceipients.length"
          class="bg-opacity-50 p-3 dark:bg-gray-800"
        >
          <span
            v-for="receipient in selectedReceipients"
            :key="receipient.receipient"
            class="inline-block px-2 py-1 rounded-sm mr-2 text-sm dark:bg-gray-700 light:bg-gray-300"
          >
            {{ receipient.name }} <span><button
              class="inline-block bg-red-700 p-1 rounded-sm mr-2 text-white-700"
              @click="removeSelectedReciepients(receipient.receipient)"
            >X</button></span>
          </span>
        </div>
        <divider />
        <field
          label="Comment"
        >
          <control
            v-model="form.comment"
            row="3"
            type="textarea"
          />
        </field>
        <divider />
        <jb-buttons>
          <jb-button
            type="submit"
            color="info"
            label="Send"
            @click="submitComment"
          />
        </jb-buttons>
      </card-component>
    </main-section>
  </div>
</template>
