<template>
  <div>
    <div class="flex-container">
      <div class="flex-item">1</div>
      <div class="flex-item">2</div>
      <div class="flex-item">3</div>
      <div class="flex-item">4</div>
      <div class="flex-item">5</div>
      <!-- <div class="flex-item">6</div>
      <div class="flex-item">7</div>
      <div class="flex-item">8</div>
      <div class="flex-item">9</div>
      <div class="flex-item">10</div>-->
    </div>
    <!-- <div class="box">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae autem consequuntur natus eaque aut earum, eveniet maiores debitis! In est laboriosam ab praesentium sit fugiat quas ut itaque magni ullam?</p>
        <img
          src="https://i.picsum.photos/id/870/200/200.jpg?hmac=G4IaFUfMAbn5JlMY8wZINYyI9gol9fXYZXdaVEF5Jzg"
          alt
        />
      </div>
    </div>-->
    <!-- <div class="prices">
      <div class="prices_item">
        <h2 class="prices_title">Table 1</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corporis in porro? Quibusdam, itaque voluptas ab numquam harum facilis error quos alias iste atque ut doloribus expedita explicabo necessitatibus quae.</p>
      </div>
      <div class="prices_item">
        <h2 class="prices_title">Table 2</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid delectus quod, neque nihil recusandae laborum quibusdam ducimus, ab velit sapiente culpa debitis consequatur odit ullam. Vero sapiente quos non odio.</p>
      </div>
      <div class="prices_item">
        <h2 class="prices_title">Table 3</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod atque numquam tempora quaerat laborum recusandae? Iste quisquam nulla necessitatibus esse, laudantium omnis, explicabo accusantium doloremque est facilis inventore, possimus nobis.</p>
      </div>
      <div class="prices_item">
        <h2 class="prices_title">Table 4</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus rem expedita officiis libero quae eaque harum ipsa, labore recusandae explicabo dolorum? Libero fuga consequatur at dicta cum consequuntur culpa vero!</p>
      </div>
    </div>-->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class FlexExample extends Vue {}
</script>

<style scoped>
.flex-container {
  background-color: #288991;
  height: 400px;
  padding: 0.5em 0;
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  /* justify-content: space-evenly; */
  /* justify-content: center; */
  /* justify-content: space-between; */
  /*align-items: stretch;*/ /** Estira los elementos a lo alto del contenedor */
  /* align-items: flex-end; */
  /* align-content: center; */
}

.flex-item {
  width: 50px;
  height: 30px;
  /* margin: 0.5em; */
  margin: auto; /** Para centrar elemento cuando solo es uno */
  /*margin-bottom: auto;*/ /** CUIDADO: al dar un margen con lado, en flex toma el lado contrario */
  line-height: 30px;
  color: aliceblue;
  text-align: center;
  background-color: #4f1c4f;
}
.box {
  border: 1px solid black;
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
}
.box img {
  max-width: 50%;
}
.prices {
  display: flex;
  /* align-items: baseline; */ /**Alinear texto entre tarjetas */
  height: 600px;
  border: 1px solid black;
}
.prices_item {
  width: 25%;
  height: 300px;
}
.prices_item:first-child {
  background: peru;
}
.prices_item:nth-child(2) {
  background: green;
  align-self: flex-end;
}
.prices_item:nth-child(3) {
  background: indianred;
}
.prices_item:nth-child(4) {
  background: lightgreen;
  line-height: 50px;
}
</style>
