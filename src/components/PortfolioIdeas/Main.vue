<template>
  <div class="cuerpo">
    <div class="vtl">
      <a href="#level1">
        <div class="event">
          <strong class="edate">11 Mar 2237 12:34</strong>
          <p class="etxt">Evil Cates invaded planet Doge.</p>
        </div>
      </a>
      <a href="#level2">
        <div class="event">
          <strong class="edate">12 Mar 2237 14:23</strong>
          <p class="etxt">Cates ate Doge food.</p>
        </div>
      </a>
      <a href="#level3">
        <div class="event">
          <strong class="edate">13 Mar 2237 20:12</strong>
          <p class="etxt">Cates took over the Doge beds.</p>
        </div>
      </a>
      <div class="event">
        <strong class="edate">14 Mar 2237 08:11</strong>
        <p class="etxt">Hoomans to the rescue.</p>
      </div>
      <div class="event">
        <strong class="edate">15 Mar 2237 14:27</strong>
        <p class="etxt">Evil cates gone. Victory for good boys and girls.</p>
      </div>
    </div>
    <div class="content">
      <div id="level1" class="seccion">
        <h1>SECCION 1</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          magni temporibus sequi alias, esse laboriosam nam! Placeat,
          laudantium? Repudiandae, perferendis neque ab sapiente sint inventore
          fugit tenetur doloremque quod ipsam!
        </p>
      </div>
      <div id="level2" class="seccion">
        <h1>SECCION 2</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem,
          pariatur!
        </p>
      </div>
      <div id="level3" class="seccion">
        <h1>SECCION 3</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem,
          pariatur!
        </p>
      </div>
      <div id="level4" class="seccion">
        <h1>SECCION 4</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem,
          pariatur!
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import vue from "vue";
import Component from "vue-class-component";
@Component
export default class Main extends vue {
  level1 = this.$el.querySelector("#level1");
  // prueba() {
  //   this.level1.scrollTop = this.level1.scrollHeight;
  // }
}
</script>

<style lang="scss" scoped>
/* (A) "SET" THE TIMELINE CONTAINER */
.vtl {
  /* (A1) RELATIVE POSITION NECESSARY TO PROPERLY POSITION TIMELINE LATER */
  position: sticky;

  /* (A2) RESERVE MORE SPACE TO THE LEFT FOR THE TIMELINE */
  padding: 10px 10px 10px 50px;
  /* (A3) OPTIONAL WIDTH RESTRICTION */
  max-width: 30%;
  top: 0;
}

/* (B) DRAW TIMELINE USING ::BEFORE */
.vtl::before {
  /* (B1) DRAW THE TIMELINE */
  content: "";
  width: 5px;
  background-color: #fff;
  /* (B2) POSITION IT TO THE LEFT */
  position: absolute;
  top: 0;
  bottom: 0;
  left: 15px;
}

/* (C) STYLES FOR THE EVENTS */
div.event {
  padding: 20px 30px;
  background-color: #ffebeb;
  position: relative;
  border-radius: 6px;
  margin-bottom: 10px;
  width: 100%;
}

/* (D) STYLES FOR THE DATE & TEXT */
strong.edate {
  font-size: 0.9em;
  font-weight: bold;
  color: #ff6a00;
}
p.etxt {
  margin: 10px 0 0 0;
  font-style: 0.8em;
  color: #222;
}

/* (E) ADD "SPEECH BUBBLE TRIANGLE" TO THE EVENTS */
div.event::before {
  content: "";
  border: 10px solid transparent;
  border-right-color: #fff;
  border-left: 0;
  position: absolute;
  top: 20%;
  left: -10px;
}

/* (F) ADD A CIRCLE ON THE TIMELINE TO INDICATE AN EVENT */
div.event::after {
  content: "";
  background: #222;
  border: 4px solid #fff;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  position: absolute;
  top: 20%;
  left: -44px;
}

/* (X) DOES NOT MATTER */
.cuerpo {
  font-family: arial, sans-serif;
  background-color: #222;
  height: 400vh;
  display: flex;
  align-items: flex-start;
  scroll-behavior: smooth;
  // overflow: auto;
}
.seccion {
  width: 100%;
  height: 40rem;
  margin: 3%;
  h1 {
    color: #ffebeb;
  }
  p {
    color: #fff;
  }
}
.seccion:first-child {
  background-color: #26ae89;
  border: #fff 3px solid;
}
.seccion:nth-child(2) {
  background-color: #ff6a00;
  border: #fff 3px solid;
}
.seccion:nth-child(3) {
  background-color: #6c1b77;
  border: #fff 3px solid;
}
.seccion:nth-child(4) {
  background-color: #ff6a00;
  border: #fff 3px solid;
}
.content {
  display: flex;
  flex-direction: column;
}
</style>
