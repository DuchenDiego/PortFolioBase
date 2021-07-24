<template>
  <div class="cuerpo">
    <div class="grid-container-example2">
      <div class="grid-item">A</div>
      <div class="grid-item">B</div>
      <div class="grid-item">C</div>
      <div class="grid-item">D</div>
      <div class="grid-item">E</div>
      <div class="grid-item">F</div>
      <div class="grid-item">G</div>
      <div class="grid-item">H</div>
      <div class="grid-item">I</div>
      <!-- <div class="grid-item">J</div>
      <div class="grid-item">K</div>
      <div class="grid-item">L</div>-->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class GridExample extends Vue {}
</script>

<style scoped>
.cuerpo {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  height: 200vh;
  color: #eee;
  font-family: sans-serif;
  background-image: radial-gradient(circle, #b94bf8, #3a1957);
  background-repeat: no-repeat;
}
.grid-container-example {
  display: grid;
  grid-template-columns: 100px 200px 100px 200px;
  grid-template-rows: 100px 50px 13px;
  /*grid-column-gap: 10px; /*gaps de columnas */
  /*grid-row-gap: 10px; /**gaps de rows */
  grid-gap: 10px; /**gaps de ambos */
}
.grid-container-example2 {
  display: grid;
  grid-template-columns: 100px 100px 100px 100px;
  grid-template-rows: 100px 100px 100px 100px;
  grid-gap: 4px;
}
.grid-item {
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  font-size: 2rem;
}
.grid-item:nth-child(4),
.grid-item:nth-child(3) {
  background-color: orange;
}
.grid-item:first-child,
.grid-item:nth-child(2) {
  background-color: violet;
}
.grid-item:nth-child(4) {
  grid-column-start: 1;
  grid-row-start: 1;
}
.grid-item:nth-child(3) {
  grid-column-start: 3;
  /* grid-row-start: span 3; */
  grid-row: span 2;
  /* grid-row-end: 3; */
}
.grid-item:nth-child(2) {
  /* grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 4; */
  grid-column: 1 / 3;
  grid-row: 2 / 4;
}
</style>
