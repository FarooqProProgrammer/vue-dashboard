<!-- layouts/DashboardLayout.vue -->
<script setup lang="ts">
import Header from '@/components/Header/index.vue'
</script>

<template>
  <div>
    <Header />
    <main><slot /></main>
  </div>
</template>