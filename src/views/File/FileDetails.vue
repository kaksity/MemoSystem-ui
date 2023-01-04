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
const file = ref({})

const toastMessage = useToast()

async function getFileDetails (fileId) {
  try {
    const response = await Api.get(`/files/${fileId}`)
    file.value = response
    document.getElementById('fileContent').innerHTML = file.value.description
  } catch (error) {
    toastMessage.error(error.message)
  }
}
onMounted(async () => {
  const fileId = routes.params.fileId
  await getFileDetails(fileId)
})

</script>
<template>
  <div>
    <main-section>
      <card-component
        title="File Details"
        :icon="mdiBallot"
      >
        <field label="File Name">
          {{ file.name }}
        </field>
        <divider />
        <field label="File Number">
          {{ file.code }}
        </field>
        <divider />
        <field label="File Description">
          <div id="fileContent" />
        </field>
        <divider />
      </card-component>
    </main-section>
  </div>
</template>
