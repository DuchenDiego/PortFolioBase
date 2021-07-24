<template>
  <div class="cuerpo">
    <div class="main_container">
      <div
        class="text_about_start"
      >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore natus autem maxime alias, nobis ab porro ducimus officia consequuntur rerum, corporis facere expedita pariatur consectetur, mollitia ex temporibus commodi quam?</div>
      <div>
        <img src="@/assets/img/testPortrat.jpg" class="photo" />
      </div>
      <div class="text_about_end">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis facilis iste illum officiis, sint reiciendis exercitationem velit, illo rem odit quaerat voluptate dolores eaque voluptates excepturi corrupti accusamus vitae non?</p>
      </div>
    </div>
    <div class="rest"></div>
    <div class="parallax"></div>
    <div class="rest"></div>
  </div>
</template>

<script lang='ts'>
import vue from "vue";
import Component from "vue-class-component";

@Component
export default class AboutMe extends vue {}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Slabo+27px&display=swap");
.cuerpo {
  padding: 2em;
  background: #ffffff;
  color: #000000;
  height: 500vh;
  font-family: "Share Tech Mono", monospace;
}
.main_container {
  width: 100%;
  display: flex;
  height: 10%;
  flex-direction: row;
  font-family: "Slabo 27px", serif;
  .text_about_start {
    width: 40%;
    height: 30%;
    display: flex;
    align-content: flex-start;
    justify-content: flex-start;
  }
  .photo {
    width: 100%;
    height: 100%;
    align-content: center;
    justify-content: center;
    clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
  }
  .text_about_end {
    width: 40%;
    height: 100%;
    align-content: flex-end;
    justify-content: flex-end;
  }
}
.rest {
  background-color: #333333;
  width: 100%;
  height: 100%;
}
.parallax {
  /* The image used */
  background-image: url("../../assets/img/code.jpg");

  /* Full height */
  height: 20%;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>