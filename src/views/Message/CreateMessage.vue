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

const receipients = ref([])

const toastMessage = useToast()

// const receipients = ref([])
const editor = ref(null)

const selectedReceipients = ref([])
const receipientSelectBox = ref({})
const form = reactive({
  receipients: null,
  message: '',
  title: ''
})

function clearInputs () {
  selectedReceipients.value = []
  form.message = ''
  form.title = ''
  editor.value.setHTML('')
}

onMounted(async () => {
  await getUsers()
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
async function getUsers () {
  try {
    const response = await Api.get('/users')
    response.data.forEach(element => {
      receipients.value.push({
        id: element.id,
        label: element.fullName
      })
    })
  } catch (error) {
    toastMessage.error(error.message)
  }
}

const submit = async () => {
  try {
    if (selectedReceipients.value.length === 0) {
      toastMessage.error('You must select atleast 1 receipient')
      return
    } else if (form.title === '') {
      toastMessage.error('Message Title is required')
      return
    } else if (form.message === '') {
      toastMessage.error('Message Content is required')
      return
    }
    form.receipients = selectedReceipients
    const response = await Api.post('/messages', form)
    toastMessage.success(response.message)
    clearInputs()
  } catch (error) {
    toastMessage.error(error.message)
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
        <field label="Receipient">
          <control
            v-model="receipientSelectBox"
            :options="receipients"
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
        <field label="Message Title">
          <control
            v-model="form.title"
          />
        </field>
        <divider />
        <field label="Message Content">
          <QuillEditor
            ref="editor"
            v-model:content="form.message"
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
