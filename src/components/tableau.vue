<template>
  <div class="ranking-table">
    <h2>Top Joueurs</h2>
    <table>
      <thead>
        <tr>
          <th>Rang</th>
          <th>Joueurs</th>
          <th>PAYS</th>
          <th>SCORE</th>
          <th>Progression</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(players, index) in players" :key="players.id">
          <td>#{{ index + 1 }}</td>
          <td>
            <img :src="players.avatar" alt="Avatar" class="avatar" />
            {{ players.Nom }}
          </td>
          <td>{{ players.Pays }}</td>
          <td>{{ players.Score }}</td>
          <td>{{ players.Progression }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090'); // URL de votre serveur PocketBase
const players = ref([]); // Liste des joueurs

// Fonction pour récupérer les joueurs et les trier par score décroissant
const fetchPlayers = async () => {
  try {
    const records = await pb.collection('players').getFullList({
      sort: '-Score', // Trie par score décroissant
    });
    players.value = records.map(players => ({
      id: players.id,
      Nom: players.Nom,
      Pays: players.Pays,
      Score: players.Score,
      Progression: players.Progression,
      avatar: players.Image,
    }));
  } catch (e) {
    console.error(e);
  }
};

// Appel de la fonction pour récupérer les joueurs au montage du composant
onMounted(fetchPlayers);
</script>

<style scoped>
.ranking-table {
  max-width: 800px;
  margin: auto;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.flag {
  width: 24px;
  height: 24px;
}
</style>
