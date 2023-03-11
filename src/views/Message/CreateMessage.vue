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
import { groupErrors } from '@/helpers'

const recipients = ref([])
const errors = ref({})
const toastMessage = useToast()

// const recipients = ref([])
const editor = ref(null)

const selectedRecipients = ref([])
const recipientSelectBox = ref({})
const displayedRecipients = ref([])

const form = reactive({
  recipients: null,
  content: '',
  title: ''
})

function clearInputs () {
  selectedRecipients.value = []
  displayedRecipients.value = []
  form.message = ''
  form.title = ''
  editor.value.setHTML('')
}

onMounted(async () => {
  await getUsers()
})
function setRecipient () {
  const isExist = selectedRecipients.value.find(recipientId => recipientId === recipientSelectBox.value.id)

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
    toastMessage.error(error.message)
  }
}
function clearErrors () {
  errors.value = {}
}
const submit = async () => {
  try {
    clearErrors()
    form.recipients = selectedRecipients
    const { message } = await Api.post('/messages', form)
    toastMessage.success(message)
    clearInputs()
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
        title="Create Message"
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
            v-for="(recipient, index) in displayedRecipients"
            :key="index"
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
          label="Message Title"
          :help="errors.title"
        >
          <control
            v-model="form.title"
          />
        </field>
        <divider />
        <field
          label="Message Content"
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
