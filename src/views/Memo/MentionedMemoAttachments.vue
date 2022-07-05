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
const receipients = ref([])
const attachments = ref([])
const toastMessage = useToast()

const memoId = ref(routes.params.memoId)

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
function viewMemoAttachment (url) {
  window.open(url)
}
async function getMemoAttachments (memoId) {
  try {
    const response = await Api.get(`/memos/${memoId}/attachments`)
    attachments.value = response.data.attachments
  } catch (error) {
    toastMessage.error(error.message)
  }
}

onMounted(async () => {
  await getMemoDetails(memoId.value)
  await getMemoReceipients(memoId.value)
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
