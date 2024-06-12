<template>
  <main class="main-content">
    <h2 class="text-center">S'INSCRIRE</h2>
    <form @submit.prevent="register" class="space-y-6 mt-10 mb-36 sm:mx-auto sm:w-full sm:max-w-sm">
      <div class="mb-2 md:mb-8">
        <label class="block tracking-wide text-xs mb-2" for="last-name">Nom</label>
        <input class="block w-full bg-Impure-white text-black border rounded py-3 px-4 mb-3 h-11" id="last-name" type="text">
      </div>
      <div class="mb-2 md:mb-8">
        <label class="block tracking-wide text-xs mb-2" for="first-name">Prénom</label>
        <input class="block w-full bg-Impure-white text-black border rounded py-3 px-4 mb-3 h-11" id="first-name" type="text">
      </div>
      <div class="mb-2 md:mb-8">
        <label class="block tracking-wide text-xs mb-2" for="login">E-mail</label>
        <input class="block w-full bg-Impure-white text-black border rounded py-3 px-4 mb-3 h-11" id="login" type="email">
      </div>
      <div class="mb-2 md:mb-8">
        <label class="block tracking-wide text-xs mb-2" for="passwd">Mot de passe</label>
        <input class="block w-full bg-Impure-white text-black border rounded py-3 px-4 mb-3 h-11" id="passwd" type="password">
      </div>
      <div class="mb-2 md:mb-8">
        <label class="block tracking-wide text-xs mb-2" for="passwd-confirm">Confirmer le mot de passe</label>
        <input class="block w-full bg-Impure-white text-black border rounded py-3 px-4 mb-3 h-11" id="passwd-confirm" type="password">
      </div>
      <div class="flex items-center justify-center">
        <input type="checkbox" id="conditions" name="conditions" class="mr-2 purple-checkbox" v-model="acceptedConditions">
        <router-link to="/conditions">
          <label for="conditions">J'accepte les conditions d'utilisation</label>
        </router-link>
      </div>
      <div class="md:col-span-2 flex justify-center m-4">
        <button class="bg-purple-500 text-white font-bold rounded py-2 px-10 mb-5" type="submit" :disabled="!acceptedConditions">S'inscrire</button>
      </div>
      <div class="flex justify-center space-x-4">
        <button @click="signInWithGoogle" type="button" class="bg-red-500 text-white font-bold rounded py-2 px-4">
          <i class="fab fa-google"></i> Google
        </button>
        <button @click="signInWithFacebook" type="button" class="bg-blue-500 text-white font-bold rounded py-2 px-4">
          <i class="fab fa-facebook"></i> Facebook
        </button>
      </div>
      <router-link to="/seconnecter">
        <p class="text-center">Déjà un compte ? <span class="text-violet-500">Se connecter</span></p>
      </router-link>
      <p v-if="error" class="text-center text-red-500">{{ error }}</p>
      <p v-if="success" class="text-center text-green-500">{{ success }}</p>
    </form>
  </main>
</template>

<script>
import { ref } from 'vue';
import { auth, googleProvider, facebookProvider } from '../firebase';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

export default {
  setup() {
    const acceptedConditions = ref(false);
    const error = ref(null);
    const success = ref(null);

    const register = async () => {
      error.value = null;
      success.value = null;

      if (!acceptedConditions.value) {
        error.value = "Vous devez accepter les conditions d'utilisation.";
        return;
      }

      const email = document.getElementById('login').value;
      const password = document.getElementById('passwd').value;
      const passwordConfirm = document.getElementById('passwd-confirm').value;
      const lastName = document.getElementById('last-name').value;
      const firstName = document.getElementById('first-name').value;

      if (!email || !password || !passwordConfirm || !lastName || !firstName) {
        error.value = "Tous les champs doivent être remplis.";
        return;
      }

      if (password !== passwordConfirm) {
        error.value = "Les mots de passe ne correspondent pas.";
        return;
      }

      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        success.value = "Vous êtes inscrit, veuillez vous connecter.";
        console.log("Utilisateur créé:", user);
      } catch (e) {
        error.value = `Erreur lors de l'inscription: ${e.message}`;
        console.error("Erreur Firebase:", e);
      }
    };

    const signInWithGoogle = async () => {
      try {
        const result = await signInWithPopup(auth, googleProvider);
        console.log("Connecté avec Google:", result.user);
      } catch (e) {
        error.value = `Erreur lors de la connexion avec Google: ${e.message}`;
        console.error("Erreur Google:", e);
      }
    };

    const signInWithFacebook = async () => {
      try {
        const result = await signInWithPopup(auth, facebookProvider);
        console.log("Connecté avec Facebook:", result.user);
      } catch (e) {
        error.value = `Erreur lors de la connexion avec Facebook: ${e.message}`;
        console.error("Erreur Facebook:", e);
      }
    };

    return {
      acceptedConditions,
      register,
      signInWithGoogle,
      signInWithFacebook,
      error,
      success,
    };
  },
};
</script>

<style>
/* Ajoutez ici le style pour les icônes, par exemple en utilisant Font Awesome */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');
</style>
