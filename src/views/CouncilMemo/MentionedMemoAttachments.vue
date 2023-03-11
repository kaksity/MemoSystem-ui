<script setup>
import { ref, onMounted } from 'vue'
import { mdiEye, mdiBallot } from '@mdi/js'
import MainSection from '@/components/MainSection.vue'
import CardComponent from '@/components/CardComponent.vue'
import Field from '@/components/Field.vue'
import Divider from '@/components/Divider.vue'
import Api from '@/api'
import { useToast } from 'vue-toastification'
import { useRoute } from 'vue-router'
import JbButtons from '@/components/JbButtons.vue'
import JbButton from '@/components/JbButton.vue'

const routes = useRoute()
const memo = ref({})
const recipients = ref([])
const attachments = ref([])
const toastMessage = useToast()

const memoId = ref(routes.params.memoId)

async function getMemoDetails (memoId) {
  try {
    const response = await Api.get(`/memos/${memoId}`)
    memo.value = response
    recipients.value = response.recipients
  } catch (error) {
    toastMessage.error(error.message)
  }
}
function viewMemoAttachment (url) {
  window.open(url)
}
async function getMemoAttachments (memoId) {
  try {
    const response = await Api.get(`/memos/${memoId}/attachments`)
    attachments.value = response
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
            {{ recipient.fullName }}
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
            </jb-buttons>
          </div>
        </field>
        <divider />
      </card-component>
    </main-section>
  </div>
</template>
