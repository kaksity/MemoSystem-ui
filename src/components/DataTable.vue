<script setup>
defineProps({
  theads: Array
})
</script>
<template>
  <table>
    <thead>
      <tr>
        <th
          v-for="(thead, index) in theads"
          :key="index"
        >
          {{ thead }}
        </th>
      </tr>
    </thead>
    <tbody>
      <slot />
    </tbody>
  </table>
</template>
