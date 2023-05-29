<template>
    <div class="Envies">
      <h1 class="texte">Envies</h1>
      <div class="elementsContainer">
                <!-- <input type="text" placeholder="Recherchez une envie" class="search" v-model="this.search"> -->
            </div>
  
      <div class="imgP" @click="toggleForm">
        <img src="../assets/plus.jpg" alt="ajouter">
      </div>
  
      <form v-if="showForm" class="formulaire" @submit="handleSubmit">
        <div class="form-group">
          <label for="name">Evènement :</label>
          <input type="text" id="name" name="name" required v-model="eventName">
        </div>
  
        <div class="form-group">
          <label for="text">Magasin :</label>
          <input type="text" id="text" name="text" required v-model="storeName">
        </div>
  
        <div class="form-group">
          <label for="message">Prix :</label>
          <input type="text" id="prix" name="prix" required v-model="price">
        </div>
  
        <div class="form-group">
          <label for="message">Description :</label>
          <textarea id="message" name="message" rows="4" required v-model="description"></textarea>
        </div>
  
        <div class="form-group">
          <button type="submit">{{ isEditing ? 'Modifier' : 'OK' }}</button>
        </div>
      </form>
      <div class="encadres-container">
      <div v-for="(encadre, index) in encadres" :key="index" class="encadre">
        <img src="../assets/livre.jpg" alt="Image">
        <div class="contenu">
          <h2>Evènement : {{ encadre.eventName }}</h2>
          <p>Magasin : {{ encadre.storeName }}</p>
          <p>Prix : {{ encadre.price }}</p>
          <p>Description : {{ encadre.description }}</p>
          <div>
            <button @click="editEncadre(index)">Modifier</button>
            <button @click="deleteEncadre(index)">Supprimer</button>
            <button>☆</button>
          </div>
        </div>
      </div>
    </div>
</div>
  </template>
  
  <script>
  export default {
    name: 'Envies-component',
    data() {
      return {
        showForm: false,
        eventName: '',
        storeName: '',
        price: '',
        description: '',
        encadres: [],
        isEditing: false,
        editingIndex: null,
        search:''
      };
    },
    methods: {
        // mounted(){
        //     axios.get('http://localhost:5000/envies').then(response => this.envies=(response.data.results));
        // },
        // beforeMount(){
        //     this.getEnv()
        // },
      toggleForm() {
        this.showForm = !this.showForm;
        this.resetForm();
      },
      handleSubmit(event) {
        event.preventDefault();
  
        if (this.isEditing) {
          // Modifier l'encadré existant
          this.encadres[this.editingIndex] = {
            eventName: this.eventName,
            storeName: this.storeName,
            price: this.price,
            description: this.description
          };
          this.isEditing = false;
          this.editingIndex = null;
        } else {
          // Créer un nouvel encadré avec les valeurs des propriétés
          const newEncadre = {
            eventName: this.eventName,
            storeName: this.storeName,
            price: this.price,
description: this.description
};
    // Ajouter le nouvel encadré à une liste ou à un tableau dans votre modèle de données
    this.encadres.push(newEncadre);
  }

  // Réinitialiser les propriétés et masquer le formulaire
  this.resetForm();
},
editEncadre(index) {
  // Copier les valeurs de l'encadré dans les propriétés du formulaire
  const encadre = this.encadres[index];
  this.eventName = encadre.eventName;
  this.storeName = encadre.storeName;
  this.price = encadre.price;
  this.description = encadre.description;
  this.isEditing = true;
  this.editingIndex = index;
  this.showForm = true;
},
deleteEncadre(index) {
  // Supprimer l'encadré de la liste
  this.encadres.splice(index, 1);
},
resetForm() {
  // Réinitialiser les propriétés du formulaire
  this.eventName = '';
  this.storeName = '';
  this.price = '';
  this.description = '';
  this.isEditing = false;
  this.editingIndex = null;
}
}
};
</script>

<style scoped>
.Envies {
  padding: 10px;
}

.texte {
  text-align: center;
  font-size: 30px;
  padding-top: 2%;
  padding-left: 45%;
}

.imgP img {
  width: 3%;
  height: auto;
  padding-left: 30px;
}

.imgP img:hover {
  filter: brightness(200%);
}

.formulaire {
  width: 20%;
  margin-top: 20px;
  padding: 20px;
  background-color: #FDC8BC;
}

.form-group {
  color: #313131;
}

.submit-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.encadre {
  width: 300px;
  border: 1px solid #ccc;
  background-color: #ccc;
  padding: 20px;
  text-align: center;
  margin:20px;
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

.encadres-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
}

.elementsContainer{
    margin: 10px;
    padding-left: 44%;
       width: 100%;
       height: 100%;
       vertical-align: middle;
   }
</style>