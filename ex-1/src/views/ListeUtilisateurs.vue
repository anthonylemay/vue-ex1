<template>

<!-- <button @click="charger">Charger les données</button> -->
<div class="flex">
    <span class="users" v-for="utilisateur in utilisateurs" :key="utilisateur.id">
        <RouterLink :to="{name: 'posts', params: {id:utilisateur.id}}">{{ utilisateur.name }}</RouterLink>
    </span>    
</div>
    
</template>
    
<script>
    
    export default {
        name: "ListeUtilisateurs",
      data(){
        return {
          utilisateurs:[]
        }
      },
      methods: {
        charger(){
          fetch('https://jsonplaceholder.typicode.com/users')
          .then(response=>{
          return response.json()
          })
          .then(data=>{
          console.log(data)
          this.utilisateurs = data
          })
          .catch(error=>{
          console.log(error)
          })
        }
      },
      beforeCreate(){ // méthodes de cycles de vie de l'app
        console.log("Enfant - Avant création")
      }, 
      created(){ // méthodes de cycles de vie de l'app
        console.log("Enfant - Après création")
        console.log("Enfant - Liste Usagers chargée")
        this.charger() // va afficher les compostants , car ils sont déjà créés. va être pratique pour le TP final.
      },
      beforeMount(){
        console.log("Enfant - Avant montage")
    
      },
      mounted(){
        console.log("Enfant - Après montage")
      },
      beforeUpdate(){
        console.log("Enfant - Avant mise à jour")
      },
      updated(){
        console.log("Enfant - Après mise à jour")
      },
      beforeUnmount(){
        console.log("Enfant - Avant destruction")
      },
      unmounted(){
        console.log("Enfant - Après destruction")
      }
    }
     
    
    </script>
    
    <style scoped>
    .users{
        margin:1.5rem;
    }
    .users a{
        padding: 1rem;
        background-color: grey;
        border-radius: .25rem;
        color: white;
    
    }
    
    .flex{
        display:flex;
        flex-wrap: wrap
    }
    
    </style>
    