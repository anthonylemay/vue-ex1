<template>

    <!-- <button @click="charger">Charger les données</button> -->
    <div class="flex">
    <h1>Publications</h1>
    <h2>{{ utilisateur.name }}</h2>
    <div class="posts" v-for="post in posts" :key="post.id">
    <h3>{{ post.title }}</h3>
    <p>{{ post.body }}</p>
    </div>
    
    </div>
    
    </template>
    
    <script>
    

    export default {
        name: "FichePublications",
      data(){
        return {
          utilisateur:[],
          posts:[]
        }
      },
      methods: {
        getUserInfo(){  //methode pour aller rechercher le nom de l'utilisateur
          fetch('https://jsonplaceholder.typicode.com/users/'+ this.$route.params.id)
          .then(response=>{
          return response.json()
          })
          .then(data=>{
          console.log(data)
          this.utilisateur = data
          })
          .catch(error=>{
          console.log(error)
          })
        },
        chargerPosts(){  //methode pour aller rechercher les posts
          fetch('https://jsonplaceholder.typicode.com/users/'+ this.$route.params.id + '/posts')
          .then(response=>{
          return response.json()
          })
          .then(data=>{
          console.log(data)
          this.posts = data
          })
          .catch(error=>{
          console.log(error)
          })
        }
      },

      created(){ // méthodes de cycles de vie de l'app
        console.log("Enfant - Après création")
        console.log("Enfant - Liste Usagers chargée")
        this.getUserInfo() // va afficher les compostants , car ils sont déjà créés. va être pratique pour le TP final.
        this.chargerPosts() // va afficher les compostants , car ils sont déjà créés. va être pratique pour le TP final.
      }
    }
    
    </script>
    
    <style scoped>
    .posts{
        margin:1.5rem;
        padding: 1rem;
        background-color: grey;
        border-radius: .25rem;
        color: white;
    }
    .posts h3{
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }
    
    .flex{
        display:flex;
        flex-wrap: wrap
    }
    
    </style>
    