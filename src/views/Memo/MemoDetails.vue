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
const receipients = ref([])

const toastMessage = useToast()

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
    document.getElementById('memoContent').innerHTML = memo.value.content
  } catch (error) {
    toastMessage.error(error.message)
  }
}
onMounted(async () => {
  const memoId = routes.params.memoId
  await getMemoDetails(memoId)
  await getMemoReceipients(memoId)
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
        <field label="Memo Content">
          <div id="memoContent" />
        </field>
        <divider />
      </card-component>
    </main-section>
  </div>
</template>
