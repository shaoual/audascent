<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import { RouterLink } from 'vue-router'

</script>


<template> 

<main class="main-content">

<h2>COOKIES</h2>

    <div class="lg:w-1/2 mb-20">
        <p class="mt-6">Bienvenue sur notre page dédiée à la politique d'utilisation des cookies pour Audascent. Notre objectif est de vous informer clairement sur l'usage des cookies sur notre plateforme, leur finalité et vos choix concernant ces derniers.</p>

        <p class="mt-6">Qu'est-ce qu'un cookie ?</p>

        <p class="mt-6">Un cookie est un petit fichier texte stocké sur votre ordinateur ou appareil mobile lorsque vous visitez un site web. Il permet au site de se souvenir de vos actions et préférences (telles que la connexion, la langue, la taille de police et d'autres préférences d'affichage) sur une période donnée, vous évitant ainsi de les resaisir chaque fois que vous consultez le site ou naviguez d'une page à une autre.</p>

        <p class="mt-6">Comment utilisons-nous les cookies ? </p>

        <p class="mt-6">Sur Ascentia, les cookies sont utilisés pour améliorer votre expérience de navigation, comprendre comment vous interagissez avec notre site et les services que nous proposons. </p>

        <p class="mt-6">Types de cookies que nous utilisons Nous utilisons les types de cookies suivants sur notre site :</p>

        <ul>
            <li>Cookies essentiels : Nécessaires au fonctionnement de base du site, tels que l'accès à des zones sécurisées.</li>
            <li>Cookies de performance : Collectent des informations sur l'utilisation du site par les visiteurs, nous aidant à améliorer son fonctionnement.</li>
            <li>Cookies de fonctionnalité : Permettent au site de se souvenir des choix que vous faites (comme votre nom d'utilisateur, la langue ou la région où vous vous trouvez) et fournissent des fonctionnalités améliorées et plus personnelles.</li>
            <li>Cookies publicitaires : Utilisés pour diffuser des annonces plus pertinentes pour vous et vos intérêts.</li>
        </ul>


        <p class="mt-6">Comment gérer les cookies ?</p>

        <p class="mt-6">Vous avez le choix de configurer votre navigateur pour accepter tous les cookies, rejeter tous les cookies ou être averti quand un cookie est envoyé. Chaque navigateur étant différent, nous vous invitons à consulter le menu d'Aide de votre navigateur pour comprendre comment modifier vos préférences en matière de cookies. Cependant, veuillez noter que certaines fonctionnalités de notre site peuvent ne pas fonctionner correctement si vous désactivez les cookies.</p>

        <p class="mt-6">Consentement</p>

        <p class="mt-6">En utilisant notre site web, vous consentez à l'utilisation des cookies décrite ci-dessus, à moins de les avoir désactivés. Nous nous engageons à respecter votre vie privée et assurons la transparence quant à l'utilisation des cookies pour améliorer votre expérience sur Audascent.</p>

    </div>
    <RouterView />
</main>
</template>