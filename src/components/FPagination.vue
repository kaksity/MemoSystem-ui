<template>
  <div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
    <BaseLevel>
      <BaseButtons>
        <BaseButton
          :disabled="(currentPage - 1) === 0"
          label="<<"
          small
          :color="page === currentPage ? 'lightDark' : 'whiteDark'"
          @click="$emit('goToFirstPage')"
        />
        <BaseButton
          :disabled="(currentPage - 1) === 0"
          label="<"
          small
          :color="page === currentPage ? 'lightDark' : 'whiteDark'"
          @click="$emit('goToPreviousPage')"
        />
        <BaseButton
          v-for="page in totalNumberOfPages"
          :key="page"
          :active="page === currentPage"
          :label="page"
          small
          :color="page === currentPage ? 'info' : 'whiteDark'"
          @click="$emit('goToCurrentPage', page)"
        />
        <BaseButton
          label=">"
          :disabled="(currentPage + 1) > totalNumberOfPages"
          small
          :color="page === currentPage ? 'lightDark' : 'whiteDark'"
          @click="$emit('goToNextPage')"
        />
        <BaseButton
          label=">>"
          :disabled="(currentPage + 1) > totalNumberOfPages"
          small
          :color="page === currentPage ? 'lightDark' : 'whiteDark'"
          @click="$emit('goToLastPage')"
        />
      </BaseButtons>
      <small>Page {{ currentPage }} of {{ totalNumberOfPages }}</small>
    </BaseLevel>
  </div>
</template>
<style scoped>
</style>
<script>
import BaseLevel from '@/components/BaseLevel.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import BaseButton from '@/components/BaseButton.vue'
export default {
  components: {
    BaseLevel,
    BaseButton,
    BaseButtons
  },
  props: {
    totalNumberOfPages: {
      type: Number
    },
    currentPage: {
      type: Number
    }
  },
  setup () {
    return {

    }
  }
}
</script>
