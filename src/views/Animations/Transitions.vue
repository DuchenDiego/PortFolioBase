<template>
  <div class="content">
    <div class="button">Click Me!</div>

    <!-- <div class="ball-container">
      <div class="ball">
        <img src="https://picsum.photos/200" alt />
      </div>
    </div>-->
  </div>
</template>

<script lang="ts">
import vue from "vue";
import Component from "vue-class-component";
@Component
export default class Transitions extends vue {}
</script>

<style scoped>
.content {
  background-color: #000000;
  display: flex;
  padding: 1rem;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100vh;
}

/**BUTTON EXAMPLE */
.button {
  background-color: red;
  text-align: center;
  color: aliceblue;
  width: 50%;
  font-family: sans-serif;
  font-size: 3rem;
  padding: 2%;
  /**Sombra de texto */
  text-shadow: 0 3px 0 #000;
  font-weight: bold;
  /**Transicion */
  /* transition-property: width, box-shadow; */
  transition-property: all;
  transition-duration: 0.5s;
}
.button:hover {
  box-shadow: 0 0 30px red;
  /* width: 70%; */
  /* background-color: blue; */
  text-shadow: 0 0 3px white, 0 3px black;
}
/*** */
/** Ball Example */
.ball {
  width: 150px;
  height: 150px;
  position: relative;
  left: 0;
  top: 0;
  transition-property: left;
  transition-duration: 1s;
  /*transition-timing-function: ease-in-out; /**empieza y termina lento */
  transition-timing-function: linear; /**velocidad constante*/
  transition-delay: 1s; /**Tiempo antes de la transicion */
}
.ball img {
  width: 100%;
  height: 100%;
}
.ball:hover {
  left: 500px;
}
.ball-container {
  position: relative;
  height: 600px;
}
.ball-container:hover .ball {
  left: 500px;
}
/*** */
</style>
