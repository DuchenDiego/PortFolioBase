<template>
  <div class="cuerpoGrid">
    <div class="block">
      <section class="animated fadeIn">
        <h1>brAd duchen</h1>
        <br />
        <h2>[Frontend Developer]</h2>
        <br />
        <h3>
          Desarrollo
          <br />Mejora
          <br />
          <p class="cursor">Apoyo Constante</p>
        </h3>
        <a>
          <div class="indicator">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </a>
      </section>
    </div>
    <div class="block ripple">
      <div class="circle xxlarge shade1"></div>
      <div class="circle xlarge shade2"></div>
      <div class="circle large shade3"></div>
      <div class="circle mediun shade4"></div>
      <div class="circle small shade5">
        <img class="animated fadeInDown" src="@/assets/img/lap.jpg" alt />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import vue from "vue";
import Component from "vue-class-component";
@Component
export default class Presentation extends vue {}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;1,800&family=Major+Mono+Display&display=swap");

.cuerpoGrid {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  background-color: #c2d1da;
}
.block {
  background-color: #333333;
  margin: 1px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
.block:nth-child(1) {
  width: 100%;
  height: 100%;
  grid-column: 1 / 3;
  grid-row: 1 / 3;
  // color: blanchedalmond;
  color: #c2d1da;
  word-break: break-all;
  section {
    padding: 0;
    margin: 0;
    h1 {
      font-family: "Major Mono Display", monospace;
      font-style: italic;
      font-size: 5em;
      color: #f2d500;
    }
    h2 {
      font-family: "JetBrains Mono", monospace;
      font-weight: bold;
      font-size: 2em;
      left: 0%;
      color: #b629a0;
    }
    h3 {
      font-family: "JetBrains Mono", monospace;
      font-size: 2em;
      left: 0%;
      color: rgb(21, 202, 102);
    }
  }
}
.block:nth-child(2) {
  width: 100%;
  height: 100%;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  justify-content: center !important;
  align-items: flex-end !important;
  padding: 1%;
  img {
    height: 80%;
    border-radius: 50%;
    margin-top: 10%;
  }
}

//** FadeDown */

.animated {
  -webkit-animation-duration: 10s;
  animation-duration: 3s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-100rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
}

//** Fade */

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(-2rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}

//** CursorEffect */

@keyframes blinker {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.cursor:after {
  content: "";
  display: inline-flex;
  width: 12px;
  height: 20px;
  background: #fff;
  transition: ease-in-out 100ms;
  animation: blinker 2s ease-in-out infinite;
}

//** Circle effect */

.circle {
  position: absolute;
  border-radius: 50%;
  background: white;
  animation: ripple 5s infinite;
  box-shadow: 0px 0px 1px 0px #508fb9;
}

.small {
  width: 200px;
  height: 200px;
  right: 0px;
  bottom: -110px;
}

.medium {
  width: 400px;
  height: 400px;
  right: -80px;
  bottom: -200px;
}

.large {
  width: 600px;
  height: 600px;
  right: -180px;
  bottom: -300px;
}

.xlarge {
  width: 800px;
  height: 800px;
  right: -280px;
  bottom: -400px;
}

.xxlarge {
  width: 1000px;
  height: 1000px;
  right: -380px;
  bottom: -500px;
}

.shade1 {
  opacity: 0.2;
}
.shade2 {
  opacity: 0.5;
}

.shade3 {
  opacity: 0.7;
}

.shade4 {
  opacity: 0.8;
}

.shade5 {
  opacity: 0.9;
}

@keyframes ripple {
  0% {
    transform: scale(0.8);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(0.8);
  }
}

.indicator {
  margin-top: 20%;
  margin-left: 48%;
  position: relative;
  width: 50px;
  height: 50px;

  transform: rotate(45deg);
  span {
    position: absolute;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 3px solid #fff;
    border-right: 3px solid #fff;
    animation: animate 2s linear infinite;
    &:nth-child(1) {
      top: -30px;
      left: -30px;
      animation-delay: 0s;
    }
    &:nth-child(2) {
      top: -15px;
      left: -15px;
      animation-delay: 0.2s;
    }
    &:nth-child(3) {
      top: 0;
      left: 0;
      animation-delay: 0.4s;
    }
    &:nth-child(4) {
      top: 15px;
      left: 15px;
      animation-delay: 0.6s;
    }
    &:nth-child(5) {
      top: 30px;
      left: 30px;
      animation-delay: 0.8s;
    }
  }
}

@keyframes animate {
  0% {
    border-color: #fff;
    transform: translate(0, 0);
  }
  20% {
    border-color: #fff;
    transform: translate(15px, 15px);
  }
  20.1%,
  100% {
    border-color: #ffd64a;
  }
}
</style>
