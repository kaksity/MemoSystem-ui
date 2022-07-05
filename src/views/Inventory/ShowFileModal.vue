<script setup>
import ModalBox from '@/components/ModalBox.vue'

defineProps({
  selectedFile: Object
})

</script>
<template>
  <modal-box
    v-model="isViewModalActive"
    title="File Details"
  >
    <p><b>File Name:</b> {{ selectedFile.name }}</p>
    <p><b>File Number:</b>  {{ selectedFile.code }}</p>
    <p><b>File Description</b>  {{ selectedFile.description }}  </p>
  </modal-box>
</template>
