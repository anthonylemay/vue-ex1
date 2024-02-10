<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<header>
<nav>
        <RouterLink :to="{name:'home'}">Accueil</RouterLink>
        <RouterLink :to="{name:'liste-utilisateurs'}">Liste Utilisateurs</RouterLink>
        <RouterLink :to="{name:'user-profile'}">Profil d'usager</RouterLink>
      </nav>

    </header>

  <RouterView />
</template>

<style scoped>

</style>
