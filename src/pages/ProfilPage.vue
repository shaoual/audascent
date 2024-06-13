<template>
  <div class="bg-black text-white min-h-screen">
    <div class="relative">
      <img src="/public/img/img_profil-1.webp" alt="background" class="w-full h-64 object-cover opacity-50">
      <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div class="bg-black bg-opacity-50 p-4 rounded-full">
          <img src="/public/img/fifa23.webp" alt="profile" class="w-24 h-24 rounded-full">
        </div>
      </div>
    </div>
    <div class="text-center mt-4">
      <h1 class="text-2xl font-bold">Pokutius</h1>
      <div class="flex justify-center space-x-2">
        <span class="flag-icon flag-icon-fr"></span>
        <i class="fab fa-discord"></i>
        <i class="fab fa-xbox"></i>
        <i class="fab fa-instagram"></i>
      </div>
    </div>
    <div class="container mx-auto px-4 py-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-zinc-800 p-4 rounded-lg">
          <h2 class="text-xl font-bold mb-4">Statistiques</h2>
          <p>Score: 2500</p>
          <p>Classement: Top 100</p>
          <div class="mt-4">
            <p>League of Legends</p>
            <p>Valorant</p>
            <p>Rocket League</p>
          </div>
        </div>
        <div class="bg-zinc-800 p-4 rounded-lg col-span-1 md:col-span-2">
          <h2 class="text-xl font-bold mb-4">Mon Profil</h2>
          <div class="mb-4">
            <h3 class="font-bold">Nom d'affichage</h3>
            <p>Pierre</p>
          </div>
          <div class="mb-4">
            <h3 class="font-bold">Nom d'utilisateur</h3>
            <p>Pokutius</p>
          </div>
          <div class="mb-4">
            <h3 class="font-bold">E-mail</h3>
            <p>Pierre.djeowi17@gmail.com</p>
          </div>
          <div class="mb-4">
            <h3 class="font-bold">Numéro de téléphone</h3>
            <p>********9878 <a href="#" class="text-blue-400">Afficher</a></p>
          </div>
        </div>
      </div>
      <div class="bg-zinc-800 p-4 rounded-lg mt-6">
        <h2 class="text-xl font-bold mb-4">Biographie</h2>
        <p>Je suis Pokutius, spécialiste des jeux de stratégie sur Audascent. Depuis 2016, je vis pour la compétition et la conquête de sommets électroniques, me distinguant dans des titres tels que "League of Legends" et "Valorant". Au-delà du jeu, j’apporte mon aide à la communauté, partageant conseils et tactiques pour que nous progressions tous. Mon jeu se fait quête de dépassement et d'excellence. Suivez mon parcours et relevons ensemble les défis de l'e-sport.</p>
      </div>
      <div class=" p-4 rounded-lg mt-6">
        <h2 class="text-xl font-bold mb-4">Mots de passe et authentification</h2>
        <button class="bg-zinc-600 hover:bg-black text-white font-bold py-2 px-4 rounded">Changer le mot de passe</button>
      </div>
      <div class="p-4 rounded-lg mt-6">
        <h2 class="text-xl font-bold mb-4">Suppression du compte</h2>
        <p>Désactiver ton compte signifie que tu pourras le récupérer à tout moment après sa désactivation.</p>
        <div class="flex space-x-4 mt-4">
          <button class="bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Désactiver le compte</button>
          <button class="border-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Supprimer le compte</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.flag-icon {
  width: 24px;
  height: 16px;
}
</style>
