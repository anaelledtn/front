<template>
    <div class='Favoris'>
        <h1 class="texte">Favoris</h1>

        <div class="encadre">
        <h2>Cadeau Jade</h2>
  <img src="../assets/livre.jpg" alt="Image">
  <div class="contenu">
    <h2>Evènement : Noel</h2>
    <p>Magasin : Fnac</p>
    <p>Prix : 9€</p>
    <p>Description : Livre</p>
  </div>
</div>

    </div>
</template>

<script>
    export default{
        name:'favoris-component',
        components:{},
    }
</script>

<style scoped>

    .Favoris{
        padding: 10px;
    }
   .texte{
       text-align: center;
       font-size: 30px;
       padding-top: 2%;
       padding-left: 45%;
   }
   .encadre {
  width: 300px;
  border: 1px solid #ccc;
  padding: 20px;
  text-align: center;
  background-color: #ccc;
}

.encadre img {
  width: 50%;
  height: auto;
  margin-bottom: 10px;
}

.encadre .contenu {
  margin-top: 10px;
}

.encadre h2 {
  font-size: 18px;
  margin-bottom: 5px;
}

.encadre p {
  font-size: 14px;
}

</style>