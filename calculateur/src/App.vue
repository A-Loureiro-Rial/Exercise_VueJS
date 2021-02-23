<template>
  <div id="app">
    <h1>Calculateur de dimensions d’un cercle</h1>
    <p id="tuto">
      Entre le rayon de ton cercle (en centimètres) et tu obtiendras un tableau avec le périmètre
      l'aide du cercle et le volume de la sphère qui correspondrait si on ajoutait une 3e dimension</p>
    <calculateur/>
  </div>
</template>

<script>
import calculateur from './components/calculateur.vue'

export default {
  name: 'App',
  components: {
    calculateur
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#tuto
{
  color: grey;
  padding-left: 30%;
  padding-right: 30%;
  margin-bottom: 10%;
}
</style>
