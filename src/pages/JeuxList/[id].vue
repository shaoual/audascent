<script setup lang="ts">
import { jeuById } from '@/backend'
import cards1 from '@/components/cards1.vue'
import { useRoute } from 'vue-router/auto'

// Utilisation de la route pour récupérer l'ID du jeu
const route = useRoute('/JeuxList/[id]')
const unJeu = await jeuById(route.params.id)
</script>

<template>
  <h1 class="text-2xl pb-6">Affiche un jeu:</h1>
  <cards1 v-if="unJeu" v-bind="unJeu" />
  <p v-else class="text-red-600">Pas de jeu trouvé</p>
</template>
