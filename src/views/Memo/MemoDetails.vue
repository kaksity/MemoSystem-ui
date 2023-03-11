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
const memo = ref({})
const recipients = ref([])

const toastMessage = useToast()

async function getMemoDetails (memoId) {
  try {
    const { data } = await Api.get(`/memos/${memoId}`)
    memo.value = data
    recipients.value = []
    document.getElementById('memoContent').innerHTML = memo.value.content
  } catch (error) {
    toastMessage.error(error.detail)
  }
}
onMounted(async () => {
  const memoId = routes.params.memoId
  await getMemoDetails(memoId)
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
        <field label="Memo Content">
          <div id="memoContent" />
        </field>
        <divider />
      </card-component>
    </main-section>
  </div>
</template>
