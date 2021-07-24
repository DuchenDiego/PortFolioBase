<template>
  <div class="cuerpoSlider">
    <h1>TECNOLOGIAS</h1>
    <div class="rowSlider_L">
      <h2 class="title_L" style="color: #f2d500">LENGUAJES DE PROGRAMACION</h2>
      <div class="sliderOne">
        <div class="slide-track">
          <div class="slide"></div>
          <div class="slide">
            <img src="@/assets/img/javascript-logo.svg" height="50" width="85" alt />
          </div>
          <div class="slide">
            <img src="@/assets/img/csharplogo.png" height="50" width="100" alt />
          </div>
          <div class="slide">
            <img src="@/assets/img/javalogo.png" height="50" width="90" alt />
          </div>
          <div class="slide">
            <img src="@/assets/img/phplogo.png" height="50" width="180" alt />
          </div>
          <div class="slide"></div>

          <!-- <div class="slide">
            <img src="@/assets/img/vuejs-logo.svg" height="80" width="100" alt />
          </div>
          <div class="slide">
            <img src="@/assets/img/sqlServerlogo.png" height="100" width="150" alt />
          </div>
          <div class="slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
              height="100"
              width="250"
              alt
            />
          </div>-->
        </div>
      </div>
      <h3 class="subtitle_L">
        <span class="material-icons">arrow_back</span>
        Mayor Dominio de izquierda, menor hacia derecha
        <span
          class="material-icons"
        >arrow_forward</span>
      </h3>
    </div>
    <div class="rowSlider_R">
      <h2 class="title_R" style="color:rgb(21, 202, 102)">FRAMEWORKS</h2>
      <div class="sliderTwo">
        <div class="slide-track">
          <div class="slide">
            <img src="@/assets/img/vuejs-logo.svg" height="80" width="100" alt />
          </div>
          <div class="slide">
            <img
              src="@/assets/img/netFWlogo.jpg"
              height="50"
              width="100"
              alt
              style="border-radius:50%"
            />
          </div>
          <div class="slide">
            <img src="@/assets/img/laravelogo.svg" height="50" width="220" alt />
          </div>
          <div class="slide"></div>
        </div>
      </div>
      <!-- <h3 class="subtitle_R">
        <span class="material-icons">arrow_back</span>
        Mayor Dominio de izquierda, menor hacia derecha
        <span
          class="material-icons"
        >arrow_forward</span>
      </h3>-->
    </div>
    <div class="rowSlider_L">
      <h2 class="title_L" style="color:#00BFFF">BASES DE DATOS</h2>
      <div class="sliderOne">
        <div class="slide-track">
          <div class="slide"></div>
          <div class="slide">
            <img src="@/assets/img/sqlServerlogo.svg" height="100" width="130" alt />
          </div>
          <div class="slide">
            <img src="@/assets/img/mysqlLogo.png" height="50" width="200" alt />
          </div>
          <div class="slide">
            <img src="@/assets/img/mongodb.png" height="50" width="100" alt />
          </div>
          <div class="slide"></div>
        </div>
      </div>
      <!-- <h3 class="subtitle_L">
        <span class="material-icons">arrow_back</span>
        Mayor Dominio de izquierda, menor hacia derecha
        <span
          class="material-icons"
        >arrow_forward</span>
      </h3>-->
    </div>
    <div class="rowSlider_R">
      <h2 class="title_R" style="color:#b629a0">DISEÑO WEB</h2>
      <div class="sliderTwo">
        <div class="slide-track">
          <div class="slide">
            <img src="@/assets/img/htmlCss.png" height="80" width="120" alt />
          </div>
          <div class="slide">
            <img src="@/assets/img/sassLogo.png" height="50" width="100" alt />
          </div>
          <div class="slide">
            <img src="@/assets/img/vuetifyLogo.png" height="50" width="120" alt />
          </div>
          <div class="slide">
            <img src="@/assets/img/bootstrapLogo.png" height="50" width="100" alt />
          </div>
          <div class="slide"></div>
        </div>
      </div>
    </div>
    <div class="rowSlider_C">
      <h2 class="title_C">TECNOLOGIAS DE INTERES</h2>
      <h3 class="subtitle_C">Tecnologías que me generan curiosidad y me gustaría aprender más</h3>
      <div class="sliderThree">
        <div class="slide-track">
          <div class="slide">
            <img src="@/assets/img/reactLogo.svg" height="80" width="120" alt />
          </div>
          <div class="slide">
            <img src="@/assets/img/nodejsLogo.svg" height="50" width="100" alt />
          </div>
          <div class="slide"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import vue from "vue";
import Component from "vue-class-component";
@Component
export default class LanguageSlider extends vue {}
</script>

<style lang="scss" scoped>
@import "~material-design-icons/iconfont/material-icons.css";
@import url("https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap");
.cuerpoSlider {
  align-items: center;
  background: #333333;
  height: 200vh;
  :nth-child(2) {
    justify-content: flex-start;
    align-items: flex-start;
  }
}
%title {
  font-size: 2em;
  padding: 1%;
}
%subtitle {
  font-size: 1.5em;
  padding: 1%;
}
.title_L {
  @extend %title;
  text-align: left;
}
.subtitle_L {
  @extend %subtitle;
  margin-left: 10%;
  text-align: left;
}
.subtitle_C {
  @extend %subtitle;
  // margin-left: 10%;
  text-align: center;
}
.title_R {
  @extend %title;
  margin-right: 1%;
}
.title_C {
  @extend %title;
  text-align: center;
}
.subtitle_R {
  @extend %subtitle;
  margin-right: 8%;
  text-align: right;
}

%rowSlider {
  height: 20%;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: "Share Tech Mono", monospace;
  color: #c2d1da;
  h2 {
    font-size: 2em;
    padding: 1%;
  }
  h3 {
    margin-left: 10%;
    font-size: 1.5em;
    padding: 1%;
  }
  span {
    color: antiquewhite;
  }
}

.rowSlider_L {
  @extend %rowSlider;
}
.rowSlider_R {
  @extend %rowSlider;
  justify-content: flex-end;
  align-items: flex-end;
}
.rowSlider_C {
  @extend %rowSlider;
  justify-content: center;
  align-items: center;
  margin-top: 2%;
}

h1 {
  font-family: "Share Tech Mono", monospace;
  color: #c2d1da;
  font-size: 4em;
  margin-left: 60%;
}

@mixin white-gradient {
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}

$animationSpeed: 9s;
$contentRespawnL: 4;
$contentRespawnR: 4;

// Animation
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * #{$contentRespawnL}));
  }
}
@keyframes scrollToRight {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(250px * #{$contentRespawnR}));
  }
}

// Styling
%slider {
  background: #333333;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
  height: 150px;
  overflow: hidden;
  position: relative;
  width: 960px;

  &::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }

  &::before {
    left: 0;
    top: 0;
  }

  .slide-track {
    display: flex;
    width: calc(250px * 14);
  }

  .slide {
    height: 100px;
    width: 250px;
  }
}

.sliderOne {
  @extend %slider;
  &::before {
    @include white-gradient;
    content: "";
    height: 100px;
    position: absolute;
    width: 200px;
    z-index: 2;
  }
  .slide-track {
    animation: scroll $animationSpeed linear infinite;
  }
}

.sliderTwo {
  @extend %slider;
  &::after {
    @include white-gradient;
    content: "";
    height: 100px;
    position: absolute;
    width: 200px;
    z-index: 2;
  }
  .slide-track {
    animation: scrollToRight $animationSpeed linear infinite;
  }
}
.sliderThree {
  @extend %slider;
  &::before {
    @include white-gradient;
    content: "";
    height: 100px;
    position: absolute;
    width: 200px;
    z-index: 2;
  }
  &::after {
    @include white-gradient;
    content: "";
    height: 100px;
    position: absolute;
    width: 200px;
    z-index: 2;
  }
  .slide-track {
    display: flex;
    align-items: center;
    margin-left: 25%;
  }
}
</style>
