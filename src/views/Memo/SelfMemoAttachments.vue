<script setup>
import { ref, onMounted, reactive } from 'vue'
import { mdiTrashCan, mdiEye, mdiBallot } from '@mdi/js'
import MainSection from '@/components/MainSection.vue'
import CardComponent from '@/components/CardComponent.vue'
import Field from '@/components/Field.vue'
import Divider from '@/components/Divider.vue'
import Api from '@/api'
import { useToast } from 'vue-toastification'
import { useRoute } from 'vue-router'
import JbButtons from '@/components/JbButtons.vue'
import JbButton from '@/components/JbButton.vue'
import Control from '@/components/Control.vue'

const routes = useRoute()
const memo = ref({})
const recipients = ref([])
const attachments = ref([])
const toastMessage = useToast()

const form = reactive({
  file: null
})

const memoId = ref(routes.params.memoId)

function onFileChange (e) {
  form.file = e.target.files || e.dataTransfer.files
}

async function uploadAttachment () {
  try {
    if (form.file === null) {
      return
    }
    const uploadForm = new FormData()
    uploadForm.append('file', form.file[0])
    const { message } = await Api.post(`/memos/${memoId.value}/attachments`, uploadForm)
    await getMemoAttachments(message)
    toastMessage.success(message)
    await getMemoAttachments(memoId.value)
  } catch (error) {
    toastMessage.error(error.message)
  }
}
async function getMemoDetails (memoId) {
  try {
    const { data } = await Api.get(`/memos/${memoId}`)
    memo.value = data
  } catch (error) {
    toastMessage.error(error.detail)
  }
}
function viewMemoAttachment (url) {
  window.open(url)
}
async function getMemoAttachments (memoId) {
  try {
    const { data } = await Api.get(`/memos/${memoId}/attachments`)
    attachments.value = data
  } catch (error) {
    toastMessage.error(error.message)
  }
}
async function deleteMemoAttachments (memoAttachmentId) {
  try {
    const { message } = await Api.delete(`/memos/${memoId.value}/attachments/${memoAttachmentId}`)
    await getMemoAttachments(memoId.value)
    toastMessage.success(message)
  } catch (error) {
    toastMessage.error(error.message)
  }
}
onMounted(async () => {
  await getMemoDetails(memoId.value)
  await getMemoAttachments(memoId.value)
})

</script>
<template>
  <div>
    <main-section>
      <card-component
        title="Memo Details"
        :icon="mdiBallot"
      >
        <field
          v-if="recipients.length"
          label="Recipients"
        >
          <span
            v-for="recipient in recipients"
            :key="recipient.recipient"
            class="inline-block px-2 py-1"
          >
            {{ recipient.user.fullName }}
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
        <field label="Attachments">
          <control
            type="file"
            placeholder="Enter the name of document"
            @change="onFileChange"
          />
        </field>
        <field label="Attached Files">
          <div
            v-for="attachment in attachments"
            :key="attachment.id"
          >
            <jb-buttons class="justify-start lg:justify-center">
              <jb-button
                color="info"
                :icon="mdiEye"
                label="View Attachment"
                @click="viewMemoAttachment(attachment.url)"
              />
              <jb-button
                color="danger"
                :icon="mdiTrashCan"
                label="Delete Attachments"
                @click="deleteMemoAttachments(attachment.id)"
              />
            </jb-buttons>
          </div>
        </field>
        <divider />
        <divider />
        <jb-buttons>
          <jb-button
            color="info"
            label="Send"
            @click="uploadAttachment"
          />
        </jb-buttons>
      </card-component>
    </main-section>
  </div>
</template>
