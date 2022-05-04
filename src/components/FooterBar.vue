<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Level from '@/components/Level.vue'

const store = useStore()

const year = computed(() => new Date().getFullYear())

const isFooterBarVisible = computed(() => !store.state.isFullScreen)
</script>

<template>
  <footer
    v-show="isFooterBarVisible"
    class="bg-white py-2 px-6 dark:bg-gray-900/70 fixed bottom-0"
  >
    <level>
      <div class="text-center md:text-left">
        <b>&copy; {{ year }} Memo System</b>
      </div>
    </level>
  </footer>
</template>
