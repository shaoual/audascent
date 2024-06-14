<script setup lang="ts">
import { pb } from '@/backend'
import cards1 from '@/components/cards1.vue'
import Menu from '@/components/menu.vue'


const allJeux = await pb.collection('jeux').getFullList() 
</script>

<template>
<h1 class="text-3xl font-bold mb-6 ml-36 ">Jeux</h1>

   <div class="flex flex-wrap justify-center">
    <RouterLink 
      :to="{name:'/JeuxList/[id]', params:{id:unJeu.id}}" 
      v-for="unJeu in allJeux" 
      :key="unJeu.id"
      class="block m-4"
    >
     <cards1 v-bind="unJeu" />
    </RouterLink>
  </div>
<Menu/>

</template>
   
