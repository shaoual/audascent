<script setup lang="ts">
import type { JeuxResponse } from '@/pocketbase-types'
import { RouterLink } from 'vue-router/auto'
import ImgPb from './ImgPb.vue'
const props = defineProps<JeuxResponse<any>>()
console.log('dans cards1', { ...props })
</script>

<template>
  <RouterLink :to="{ name: '/description', params: { id: props.id } }" class="block">
    <div class="max-w-xs rounded-lg overflow-hidden shadow-lg m-4 transform transition duration-300 hover:scale-105">
      <div class="self-stretch flex-grow-0 flex-shrink-0 h-64">
        <ImgPb
          :record="props"
          :filename="props.id[0]"
          class="rounded-t-lg w-full h-full object-cover"
        />
      </div>
      <div class="px-4 py-3 bg-gray-900 text-white text-center">
        <div class="font-bold text-lg mb-1">{{ props.Nom }}</div>
      </div>
    </div>
  </RouterLink>
</template>
