<template>

    <form @submit.prevent="fetchUserById()">
    <input v-model="userId" name="userId" type="number">
    <button type="submit">Charger l'usager</button>
    </form>

<div v-if="user && Object.keys(user).length">
    <h3>{{ user.name }}</h3>
    <p>username: {{ user.username }}</p>
    <p>Email: {{ user.email }}</p>
    <h4>address:</h4>
    <p>street: {{ user.address.street }}</p>
    <p>suite: {{ user.address.suite }}</p>
    <p>city: {{ user.address.city }}</p>
    <p>zipcode: {{ user.address.zipcode }}</p>
    <h5>geo:</h5>
    <p>lat: {{ user.address.geo.lat }}</p>
    <p>lng: {{ user.address.geo.lng }}</p>
    <p>phone: {{ user.phone }}</p>
    <p>website: <a :href="`http://`+ user.website" target="_blank">{{ user.website }}</a></p>
    <h4>company: </h4>
    <p>name: {{ user.company.name }}</p>
    <p>catch phrase: {{ user.company.catchPhrase }}</p>
    <p>bs: {{ user.company.bs }}</p>
</div>

</template>
    
    <script>
    
    export default {
        name: "UserProfile",
      data(){
        return {
          userId: null,
          user: {

          }
        }
      },
      methods: {
        fetchUserById(){
        if(this.userId){
            fetch(`https://jsonplaceholder.typicode.com/users/${this.userId}`)
          .then(response=>{
          return response.json()
          })
          .then(data=>{
          console.log(data)
          this.user = data
          })
          .catch(error=>{
          console.log(error)
          });
        } else{
        console.log("User Id non existant. Veuillez valider le formulaire.")
        }
        }
      },
      beforeCreate(){ // méthodes de cycles de vie de l'app
        console.log("Enfant - Avant création")
      }, 
      created(){ // méthodes de cycles de vie de l'app
        console.log("Enfant - Après création")
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
    
    <style>
    
    </style>
    