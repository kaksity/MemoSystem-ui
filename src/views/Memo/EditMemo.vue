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

// const receipients = ref([])
const routes = useRoute()
const receipients = ref([])
const editor = ref(null)
const toastMessage = useToast()
const memo = ref({})

const memoId = ref(routes.params.memoId)

const selectedReceipients = ref([])
const receipientSelectBox = ref({})
const form = reactive({
  receipients: null,
  content: '',
  title: '',
  date: new Date().toString()
})

async function getMemoReceipients (memoId) {
  try {
    const response = await Api.get(`/memos/${memoId}/receipients`)
    selectedReceipients.value = response.data.receipients
    selectedReceipients.value = selectedReceipients.value.map(element => {
      return {
        receipient: element.user.id,
        name: element.user.fullName
      }
    })
  } catch (error) {
    toastMessage.error(error.message)
  }
}
async function getMemoDetails (memoId) {
  try {
    const response = await Api.get(`/memos/${memoId}`)
    memo.value = response.data.memo
    form.title = memo.value.title
    form.date = memo.value.date
    form.content = memo.value.content
    editor.value.setHTML(form.content)
  } catch (error) {
    toastMessage.error(error.message)
  }
}

function clearInputs () {
  selectedReceipients.value = []
  form.content = ''
  form.date = new Date().toString()
  form.title = ''
  editor.value.setHTML(form.content)
}

onMounted(async () => {
  await getUsers()
  await getMemoDetails(memoId.value)
  await getMemoReceipients(memoId.value)
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
      toastMessage.error('Memo Title is required')
      return
    } else if (form.content === '') {
      toastMessage.error('Memo Content is required')
      return
    }
    form.receipients = selectedReceipients
    const response = await Api.put(`/memos/${memoId.value}`, form)
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
        title="Edit Memo"
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
        <field label="Memo Title">
          <control
            v-model="form.title"
          />
        </field>
        <divider />
        <field label="Date">
          <datepicker
            v-model="form.date"
            auto-apply
            alt-position
          />
        </field>
        <divider />
        <field label="Memo Content">
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
