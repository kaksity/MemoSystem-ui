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
import { groupErrors } from '@/helpers';

const routes = useRoute()
const memo = ref({})
const users = ref([])
const selectedRecipients = ref([])
const displayedRecipients = ref([])
const memoComments = ref([])
const recipientSelectBox = ref({})
const toastMessage = useToast()
const memoId = ref(routes.params.memoId)
const errors = ref({})

const form = reactive({
  comment: '',
  recipients: null
})

function setRecipient () {
  const isExist = selectedRecipients.value.find(id => id === recipientSelectBox.value.id)
  if (!isExist) {
    selectedRecipients.value.push(recipientSelectBox.value.id)
    displayedRecipients.value.push({
      id: recipientSelectBox.value.id,
      name: recipientSelectBox.value.label
    })
  }
}
function deleteElementFromArray(array, key) {
  const newArray = []
  array.forEach(element => {
    if ((element !== key) && (element.id !== key)) {
      newArray.push(element)
    }
  })
  return newArray
}
function removeSelectedRecipients (id) {
  selectedRecipients.value = deleteElementFromArray(selectedRecipients.value, id)
  displayedRecipients.value = deleteElementFromArray(displayedRecipients.value, id)
}
async function getMemoDetails (memoId) {
  try {
    const response = await Api.get(`/memos/${memoId}`)
    memo.value = response
    displayedRecipients.value = []
    selectedRecipients.value = []
    response.recipients.forEach(recipient => {
      selectedRecipients.value.push(recipient.id)
      displayedRecipients.value.push({
        id: recipient.id,
        name: recipient.fullName
      })
    })
  } catch (error) {
    toastMessage.error(error.detail)
  }
}
async function getUsers () {
  try {
    const response = await Api.get('/users')
    response.forEach(element => {
      users.value.push({
        id: element.id,
        label: element.fullName
      })
    })
  } catch (error) {
    toastMessage.error(error.detail)
  }
}
function clearErrors () {
  errors.value = {}
}
async function submitComment () {
  try {
    clearErrors()
    form.recipients = selectedRecipients
    const response = await Api.post(`/memos/${memoId.value}/comments`, form)

    toastMessage.success(response.message)
    await initializeData()
    clearInputFields()
  } catch (error) {
    if (error.errors) {
      errors.value = groupErrors(error.errors, 'field')
    } else {
      toastMessage.error(error.detail)
    }
  }
}
async function getMemoComments (memoId) {
  try {
    const response = await Api.get(`/memos/${memoId}/comments`)
    memoComments.value = response
  } catch (error) {
    toastMessage.error(error.detail)
  }
}
async function deleteMemoComment (id) {
  try {
    const response = await Api.delete(`/memos/${memoId.value}/comments/${id}`)
    toastMessage.success(response.message)
    await getMemoComments(memoId.value)
  } catch (error) {
    toastMessage.error(error.detail)
  }
}
function clearInputFields () {
  form.comment = ''
}
async function initializeData () {
  await getMemoDetails(memoId.value)
  await getMemoComments(memoId.value)
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
          v-if="displayedRecipients.length"
          label="Recipients"
        >
          <span
            v-for="recipient in displayedRecipients"
            :key="recipient.id"
            class="inline-block px-2 py-1"
          >
            {{ recipient.name }}
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
                {{ comment.user.fullName }} on <span class="text-sm">{{ comment.date }}</span> <button
                  class="inline-block bg-red-700 p-2 rounded-sm mr-2 text-white-700"
                  @click="deleteMemoComment(comment.id)"
                >
                  X
                </button>
              </div>
              <div class="text-gray-500">
                {{ comment.comment }}
              </div>
            </div>
          </div>
        </field>
        <divider />
        <field label="Recipient" :help="errors.recipients">
          <control
            v-model="recipientSelectBox"
            :options="users"
            @change="setRecipient"
          />
        </field>
        <div
          v-if="displayedRecipients.length"
          class="bg-opacity-50 p-3 dark:bg-gray-800"
        >
          <span
            v-for="recipient in displayedRecipients"
            :key="recipient.id"
            class="inline-block px-2 py-1 rounded-sm mr-2 text-sm dark:bg-gray-700 light:bg-gray-300"
          >
            {{ recipient.name }} <span><jb-button
              class="inline-block bg-red-700 p-1 rounded-sm mr-2 text-white-700"
              @click="removeSelectedRecipients(recipient.id)"
            >X</jb-button></span>
          </span>
        </div>
        <divider />
        <field
          label="Comment"
          :help="errors.comment"
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
