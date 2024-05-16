<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderPage from './components/HeaderPage.vue'
</script>

<template>
   <!-- Les pages s'affichent ici -->
  <HeaderPage />
   <main> 

  <RouterView v-slot="{ Component }">
    <Suspense>
      <component :is="Component" />
    </Suspense>
  </RouterView>

  
  </main>
</template>
