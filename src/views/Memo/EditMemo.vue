<script setup>
import { reactive, ref, onMounted } from 'vue'
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
import { groupErrors } from '@/helpers'

// const recipients = ref([])
const routes = useRoute()
const recipients = ref([])
const editor = ref(null)
const toastMessage = useToast()
const errors = ref({})
const memoId = ref(routes.params.memoId)

const selectedRecipients = ref([])
const displayedRecipients = ref([])
const recipientSelectBox = ref({})
const form = reactive({
  recipients: null,
  content: '',
  title: '',
  date: new Date().toString()
})

async function getMemoDetails (memoId) {
  try {
    const { data } = await Api.get(`/memos/${memoId}`)

    form.title = data.title
    form.date = data.date
    form.content = data.content
    editor.value.setHTML(form.content)

    data.recipients.forEach(recipient => {
      selectedRecipients.value.push(recipient.id)
      displayedRecipients.value.push({
        id: recipient.id,
        name: recipient.fullName
      })
    })
  } catch (error) {
    toastMessage.error(error.message)
  }
}

onMounted(async () => {
  await getUsers()
  await getMemoDetails(memoId.value)
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
function removeSelectedRecipients (id) {
  selectedRecipients.value = deleteElementFromArray(selectedRecipients.value, id)
  displayedRecipients.value = deleteElementFromArray(displayedRecipients.value, id)
}
function deleteElementFromArray (array, key) {
  const newArray = []
  array.forEach(element => {
    if ((element !== key) && (element.id !== key)) {
      newArray.push(element)
    }
  })
  return newArray
}

async function getUsers () {
  try {
    const { data } = await Api.get('/users')
    data.forEach(element => {
      recipients.value.push({
        id: element.id,
        label: element.fullName
      })
    })
  } catch (error) {
    toastMessage.error(error.detail)
  }
}

function processDateTime (input) {
  return new Date(input).toISOString().split('T')[0]
}

async function clearErrors () {
  errors.value = {}
}
const submit = async () => {
  try {
    clearErrors()
    const response = await Api.put(`/memos/${memoId.value}`, {
      recipients: selectedRecipients.value,
      content: form.content,
      title: form.title,
      date: processDateTime(form.date)
    })
    toastMessage.success(response.message)
  } catch (error) {
    if (error.errors) {
      errors.value = groupErrors(error.errors, 'field')
    } else {
      toastMessage.error(error.detail)
    }
  }
}
</script>
<template>
  <div>
    <main-section>
      <card-component
        title="Edit Memo"
        :icon="mdiBallot"
        form
        @submit.prevent="submit"
      >
        <field
          label="Recipient"
          :help="errors.recipients"
        >
          <control
            v-model="recipientSelectBox"
            :options="recipients"
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
            {{ recipient.name }} <span><JbButton
              class="inline-block bg-red-700 p-1 rounded-sm mr-2 text-white-700"
              @click="removeSelectedRecipients(recipient.id)"
            >X</JbButton></span>
          </span>
        </div>
        <divider />
        <field
          label="Memo Title"
          :help="errors.title"
        >
          <control
            v-model="form.title"
          />
        </field>
        <divider />
        <field
          label="Date"
          :help="errors.date"
        >
          <datepicker
            v-model="form.date"
            auto-apply
            alt-position
          />
        </field>
        <divider />
        <field
          label="Memo Content"
          :help="errors.content"
        >
          <QuillEditor
            ref="editor"
            v-model:content="form.content"
            theme="snow"
            content-type="html"
            toolbar="full"
          />
        </field>
        <divider />
        <jb-buttons>
          <jb-button
            type="submit"
            color="info"
            label="Send"
          />
        </jb-buttons>
      </card-component>
    </main-section>
  </div>
</template>
