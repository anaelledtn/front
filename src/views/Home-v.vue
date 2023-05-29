<template>
    <div class='Home'>
        <div class="parent">
           <img class="img" src="../assets/image.png" alt="image idees cadeaux">
        </div>
        
    <div class="users">
        <h1>Utilisateurs</h1>
        <router-link :to="{name: 'Envies'}">
        <p>Jade</p>
    </router-link>
    </div>
    </div>

</template>

<script>
    export default{
        name:'home-component',
        components:{}
    }
</script>

<style scoped>
   .img{
       width:50%;
       display: block;
       margin: 0px auto;
       padding-top: 1%;

   }

   .parent{
       text-align: center;
   }

   .texte{
       text-align: center;
       font-size: 30px;
       color: #FDC8BC;
   }

   .users h1{
    padding-left: 10%;
    padding-top: 10%;
    padding-right: 10%;
    padding-bottom: 1%;
   }

   .users p{
    padding-left: 10%;
    padding-right: 10%;
    padding-bottom: 10%;
    color: #FDC8BC;
    font-size: 25px;
    text-decoration: none;
   }
</style>