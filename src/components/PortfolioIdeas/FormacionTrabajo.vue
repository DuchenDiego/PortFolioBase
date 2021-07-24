<template>
  <div class="cuerpo">
    <div class="timeline">
      <div class="TimestampCont">FORMACION</div>
      <div class="container left">
        <div class="content" v-scrollanimation>
          <h2 style="text-align:right;">2012</h2>
          <div class="bodyContent">
            <img src="@/assets/img/CBALogo.png" width="200" />
            <p v-scrollanimation>
              <br />CBA English
              <br />Proficiency Certificate
            </p>
          </div>
        </div>
      </div>
      <div class="container right">
        <div class="content" v-scrollanimation>
          <div class="bodyContent">
            <h2>2013</h2>
            <p v-scrollanimation>
              <br />Bachiller en Humanidades IDEB
            </p>
            <img src="@/assets/img/IDEBLogo.png" width="150" />
          </div>
        </div>
      </div>
      <div class="container left">
        <div class="content" v-scrollanimation>
          <h2 style="text-align:right;">2019</h2>
          <div class="bodyContent">
            <img src="@/assets/img/UnivalleLogo.png" width="170" />
            <p v-scrollanimation>
              <br />
              <br />Licenciatura en Ingeniería de Sistemas Informáticos
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
    <div class="timeline">
      <div class="TimestampCont">EXPERIENCIA PROFESIONAL</div>
      <div class="container right">
        <div class="content" v-scrollanimation:top="{ cssClassBefore: 'before-enter'}">
          <h2 style="text-align:left;">2019-Presente</h2>
          <div class="bodyContent">
            <p v-scrollanimation>
              <br />Desarrollador de Software
            </p>
            <img
              style="border-radius:80%; margin-left:3%"
              src="@/assets/img/AlphaSystemsLogo.png"
              width="200"
            />
          </div>
        </div>
      </div>
      <br />
    </div>
    <div class="baseEnd"></div>
    <div class="baseEnd"></div>
    <div class="baseEnd"></div>
  </div>
</template>

<script lang="ts">
import vue from "vue";
import Component from "vue-class-component";

@Component({
  directives: {
    someDirective: {
      // Definición de directiva
      inserted: function(el) {
        el.classList.add("prueba");
      }
    }
  }
})
export default class FormacionTrabajo extends vue {}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Tinos&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap");
.cuerpo {
  background: #333333;
  height: 500vh;
}
/* The actual timeline (the vertical ruler) */
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

/* The actual timeline (the vertical ruler) */
.timeline::after {
  content: "";
  position: absolute;
  width: 6px;
  background-color: rgb(21, 202, 102);
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
  margin-top: 6.5%;
}

.baseEnd {
  position: relative;
  width: 6px;
  height: 6px;
  background-color: rgb(21, 202, 102);
  top: 0;
  bottom: 0;
  margin-top: 1%;
  left: 49.8%;
}
/* Container around content */
.container {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
}

/* The circles on the timeline */
.container::after {
  content: "";
  position: absolute;
  width: 25px;
  height: 25px;
  right: -17px;
  background-color: #333333;
  border: 4px solid rgb(21, 202, 102);
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

/* Timestamp Container */
.TimestampCont {
  content: "";
  position: relative;
  margin: auto;
  text-align: center;
  margin-bottom: 7%;
  width: 20%;
  padding-top: 1%;
  background-color: #333333;
  color: #e6fafc;
  font-weight: bold;
  top: 15px;
  z-index: 1;
  border: solid rgb(21, 202, 102);
  font-family: "Share Tech Mono", monospace;
  font-size: 2em;
}

/* Place the container to the left */
.left {
  left: -25.5%;
}

/* Place the container to the right */
.right {
  left: 25.5%;
}

/* Add arrows to the left container (pointing right) */
.left::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid #ebebd3;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent white;
}

/* Add arrows to the right container (pointing left) */
.right::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid #ebebd3;
  border-width: 10px 10px 10px 0;
  border-color: transparent white transparent transparent;
}

/* Fix the circle for containers on the right side */
.right::after {
  left: -16px;
}

/* The actual content */
.content {
  padding: 20px 30px;
  background-color: #ebebd3;
  position: relative;
  border-radius: 6px;
  font-family: "Tinos", serif;
}

.bodyContent {
  display: flex;
  flex-direction: row;
  p {
    font-size: 1.3em;
    font-weight: bold;
  }
}

/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 600px) {
  /* Place the timelime to the left */
  .timeline::after {
    left: 31px;
  }

  /* Full-width containers */
  .container {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }

  /* Make sure that all arrows are pointing leftwards */
  .container::before {
    left: 60px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
  }

  /* Make sure all circles are at the same spot */
  .left::after,
  .right::after {
    left: 15px;
  }

  /* Make all right containers behave like the left ones */
  .right {
    left: 0%;
  }

  /** SCROLL ANIMATION */
  // .before-enter {
  //   opacity: 0;
  //   transform: scale(0.5) rotateZ(-25deg);
  //   transition: all 1s ease-out;
  // }

  // .enter {
  //   opacity: 1;
  //   transform: scale(1) rotateZ(-25deg);
  // }
  .prueba {
    opacity: 0.5;
    transition: all 1s ease-out;
  }
}
</style>
