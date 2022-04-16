<script setup>
</script>

<template>
  <section
    :class="lightBorderStyle"
    class="bg-white border-t border-b p-6 dark:bg-gray-900/70 dark:border-gray-900 dark:text-white"
  >
    <level>
      <h1 class="text-3xl font-semibold leading-tight">
        <slot />
      </h1>
    </level>
  </section>
</template>
