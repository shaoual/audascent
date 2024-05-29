<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import { RouterLink } from 'vue-router'

</script>


<template> 
<main class="main-content">
<h2>POLITIQUE DE CONFIDENTIALITÉ</h2>

<menu />

<div class="lg:w-1/2 mb-20">
    <p class="mt-6">Bienvenue sur notre page dédiée à la politique de confidentialité d'Ascentia. Nous accordons une grande importance à la protection de vos données personnelles et à votre vie privée. Cette politique vise à vous informer sur la manière dont nous collectons, utilisons, divulguons, et protégeons vos informations personnelles lorsque vous utilisez notre site web et nos services..</p>

    <p class="mt-6">Collecte d'informations</p>

    <p class="mt-6">Nous collectons des informations vous concernant lorsque vous utilisez notre site, notamment :
</p>

<p class="mt-6">• Informations fournies volontairement : Cela inclut les informations que vous nous fournissez lors de l'inscription, comme votre nom, adresse e-mail, et autres coordonnées.
</p>

<p class="mt-6">• Informations collectées automatiquement : Nous recueillons certaines informations automatiquement lorsque vous visitez notre site, telles que votre adresse IP, le type de navigateur, les pages consultées, et les dates et heures d'accès.
</p>

    <p class="mt-6">Utilisation des informations </p>

    <p class="mt-6">Les informations que nous collectons sont utilisées dans le but de :</p>

    <p class="mt-6">• Fournir, exploiter, et améliorer nos services.</p>

    <p class="mt-6">• Comprendre comment vous utilisez notre site pour améliorer votre expérience utilisateur.</p>

    <p class="mt-6">• Communiquer avec vous, y compris pour vous envoyer des informations sur nos services, des newsletters, et des offres promotionnelles, sous réserve de votre consentement.</p>

    <p class="mt-6">• Assurer la sécurité de notre site et de nos services, et prévenir la fraude ou l'accès non autorisé. </p>

    <p class="mt-6">Partage des Informations</p>

    <p class="mt-6">Nous ne vendons, n'échangeons ni ne louons vos informations personnelles à des tiers. Cependant, nous pouvons partager vos informations dans les cas suivants : </p>

    <p class="mt-6"> Nous utilisons des cookies et des technologies similaires sur notre site. Veuillez consulter notre politique en matière de cookies pour plus d'informations sur la manière dont nous utilisons les cookies.</p>

    <p class="mt-6">• Fournisseurs de services tiers : Nous pouvons faire appel à des entreprises tierces pour faciliter notre service, fournir le service en notre nom, ou assister dans l'analyse de l'utilisation de notre service. Ces tiers ont accès à vos informations personnelles uniquement pour effectuer ces tâches en notre nom et sont tenus de ne pas les divulguer ni les utiliser à d'autres fins.</p>

    <p class="mt-6">• Conformité légale : Nous pouvons divulguer vos informations personnelles là où cela est nécessaire pour se conformer à une obligation légale, protéger nos droits ou ceux d'autrui, et assurer la sécurité personnelle des utilisateurs du service ou du public.</p>

    <p class="mt-6">Sécurité des Informations</p>
    
    <p class="mt-6">La sécurité de vos informations personnelles est importante pour nous. Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos données contre l'accès non autorisé, la modification, la divulgation ou la destruction. Cependant, aucun système de sécurité n'est impénétrable, et nous ne pouvons garantir la sécurité absolue de vos informations.</p>
    
    <p class="mt-6">Vos Droits</p>

    <p class="mt-6">Vous avez le droit de consulter, modifier, ou supprimer vos informations personnelles que nous détenons. Si vous souhaitez exercer ces droits ou si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter.</p>

    <p class="mt-6">Modifications de cette Politique de Confidentialité</p>

    <p class="mt-6">Nous pouvons mettre à jour notre politique de confidentialité de temps à autre. Nous vous notifierons de tout changement en publiant la nouvelle politique de confidentialité sur cette page. Vous êtes conseillé de revoir cette politique de confidentialité périodiquement pour tout changement.</p>
  </div>




<RouterView />
</main>
</template>