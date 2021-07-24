<template>
  <div class="container">
    <h1>Hola programmer</h1>
    <ul>
      <li>
        <a href>Home</a>
      </li>
      <li>
        <a href>Sobre Mi</a>
      </li>
      <li>
        <a href>Contacto</a>
      </li>
    </ul>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati culpa soluta cupiditate totam distinctio hic accusantium eum sunt? Odit aspernatur debitis quidem eveniet numquam aut eos adipisci ratione, cupiditate dolores.</p>
  </div>
</template>

<script lang="ts">
import vue from "vue";
import Component from "vue-class-component";
@Component
export default class SassExample extends vue {}
</script>

<style lang="scss" scoped>
@import "@/styles/_menu";

$colorbg: tomato;
$widthH1: 500px;
$w2: $widthH1 + 100px;
.container {
  background-color: $colorbg;
  height: 200vh;
}

@mixin fontStyle($color, $fontSize) {
  font-size: $fontSize;
  color: white;
  background-color: $color;
  text-transform: uppercase;
}
h1 {
  width: $widthH1;
  @include fontStyle(red, 40px);
}
p {
  width: $w2;
  @include fontStyle(blue, 40px);
}
</style>
