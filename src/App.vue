<template>
  <div class="glob">
    
    <div id="app">
      <!--header-->
      <header class="header">
        <nav class="menu">
          <div class="inner">
            <div class="partgauche">
              <router-link :to="{name: 'Home'}">
                <h1>INSTAWISH</h1>
              </router-link>
            </div>
            <div class="partdroite">
              <router-link class="link" :to="{name: 'Home'}">Accueil</router-link>
              <router-link class="link" :to="{name: 'Envies'}"> Envies </router-link> 
              <!-- v-show="!getCurrentInstance().appContext.config.globalProperties.user.isLogged"-->
              <router-link class="link" :to="{name: 'Favoris'}"> Favoris </router-link>
              <router-link class="link" :to="{name: 'Profil'}"> Compte </router-link>
            </div>
          </div>
        </nav>
      </header>
      <router-view />
      
    </div>
  </div>
</template>

<!-- <script setup>
    import { getCurrentInstance } from 'vue'
    import router from './router/router'
    if (!getCurrentInstance().appContext.config.globalProperties.user.isLogged) {
        router.push({ name: 'Login' })
    }
</script> -->

<style>
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@500&display=swap');

  .inner{
      width: 80%;
      margin: auto;
  }
  /*forme de la page*/
  html, body{
      background-color: #505050;
      display: table;
      margin: 0;
      padding: 0;
      height: 100%;
      width: 100%;
      font-family: 'Nunito';
  }

  /*header*/
  .menu{
      background-color: #313131;
      height: 85px;
      width: 100%;
      line-height: 85px;
      box-shadow: 1px 1px 12px #151515;
  }
  .partgauche{
      float: left;
      margin-right: 0%;
      margin-left: 0%;
      height: 10px;
      width: 200px;
  }
  h1{
    color:#FDC8BC;
    display: inline-block;
    padding: 0%;
    margin: 0%;
  }
  .partdroite{
      float: right;
  }
  .link{
      text-decoration: none;
      text-transform: uppercase;
      font-weight: 700;
      padding: 0;
      margin: 0 10px;
      color: #FDC8BC;
  }
  .link:hover{
      color: #76397c;
  }

  @media screen and (max-width: 900px) {
  .link {
    font-size: 15px;
    margin: 0 0;
  }
  .partgauche{
      float: left;
      margin-right: 0%;
      height: 85px;
      width: 100px;
  }
}

  @media screen and (max-width: 650px) {
  .link {
    font-size: 10px;
    margin: 0 0;
  }
  .partgauche{
      float: left;
      margin-right: 0%;
      height: 85px;
      width: 100px;
  }
}

</style>
