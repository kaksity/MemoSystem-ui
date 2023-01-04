<script setup>
import { ref, onMounted } from 'vue'
import { mdiBallot } from '@mdi/js'
import MainSection from '@/components/MainSection.vue'
import CardComponent from '@/components/CardComponent.vue'
import Field from '@/components/Field.vue'
import Divider from '@/components/Divider.vue'
import Api from '@/api'
import { useToast } from 'vue-toastification'
import { useRoute } from 'vue-router'

const routes = useRoute()
const message = ref({})
const recipients = ref([])

const toastMessage = useToast()

async function getMessageDetails (messageId) {
  try {
    const { data } = await Api.get(`/messages/${messageId}`)
    message.value = data
    document.getElementById('memoContent').innerHTML = message.value.content
    recipients.value = message.value.recipients
  } catch (error) {
    toastMessage.error(error.message)
  }
}
onMounted(async () => {
  const messageId = routes.params.messageId
  await getMessageDetails(messageId)
})

</script>
<template>
  <div>
    <main-section>
      <card-component
        title="Message Details"
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
        <field label="Message Title">
          {{ message.title }}
        </field>
        <divider />
        <field label="Date">
          {{ message.date }}
        </field>
        <divider />
        <field label="Message Content">
          <div id="memoContent" />
        </field>
        <divider />
      </card-component>
    </main-section>
  </div>
</template>
