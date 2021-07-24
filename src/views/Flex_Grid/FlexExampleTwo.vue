<template>
  <div class="flex-container">
    <div class="flex-item">5</div>
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
    <div class="flex-item">4</div>
  </div>
</template>

<script lang="ts">
import vue from "vue";
import Component from "vue-class-component";
@Component
export default class FlexExampleTwo extends vue {}
</script>

<style scoped>
.flex-container {
  background-color: lightsalmon;
  height: 200px;
  width: 400px;
  display: flex;
  /*flex-direction: column; */ /**flex-grow y flex-shrink dependen del main axis. si es columna toma alto */
}

.flex-item {
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 50px; */ /**Ejemplo flex-grox */
  /* width: 300px;  */ /**Ejemplo flex-shrink*/
  /* height: 300px; */ /** Ejemplo flex shrink con columna, depende mucho el tamaño de los elementos */
  height: 50px;
  width: 50px;
  color: aliceblue;
  background-color: blueviolet;
}
.flex-item:nth-child(2) {
  background: lightseagreen;
  /* flex-grow: 1; */
  /* flex-shrink: 2; */
  flex: 0 0 auto; /** Shorthand para opciones flex: 0: valor flex-grow | 0:valor flex-shrink | auto:valor flex-basis (mejora rendimiento de esta forma)*/
}
.flex-item:nth-child(3) {
  background: lightskyblue;
  /* flex-grow: 5; */
}
.flex-item:nth-child(4) {
  background: darkgoldenrod;
  /* flex-grow: 1; */
}
.flex-item:first-child {
  background: red;
  order: 1; /** Order maneja el orden de los elementos del container por su peso. a mayor peso su colocacion al ultimo, muy similar a z-index */
}
</style>