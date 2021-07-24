<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/flex">Flex1</router-link>|
      <router-link to="/flexTwo">Flex2</router-link>|
      <router-link to="/flexLab">FlexLab</router-link>|
      <router-link to="/grid">Grid</router-link>|
      <router-link to="/gridTwo">Grid2</router-link>|
      <router-link to="/transitions">Transiciones</router-link>|
      <router-link to="/sassex">Sass1</router-link>|
      <br />
      <button class="button" @click="redireccion('main')">Ir a Main Portfolio</button>
      <button class="button" @click="redireccion('presentation')">Ir a Presentacion</button>
      <button class="button" @click="redireccion('languageslider')">Ir a Slider</button>
      <button class="button" @click="redireccion('trabajoformacion')">Ir a Formacion y Trabajo</button>
      <button class="button" @click="redireccion('portfoliogrid')">Ir PorfolioGrid</button>
      <button class="button" @click="redireccion('contactform')">Ir ContactForm</button>
      <button class="button" @click="redireccion('aboutme')">Ir AboutMe</button>
    </div>
    <router-view :key="$route.path"></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    redireccion(page) {
      if (page == "main") {
        this.$router.push("/main").catch(error => {
          console.log(error);
        });
      } else if (page == "presentation") {
        this.$router.push("presentation");
      } else if (page == "languageslider") {
        this.$router.push("languageslider");
      } else if (page == "trabajoformacion") {
        this.$router.push("trabajoformacion");
      } else if (page == "portfoliogrid") {
        this.$router.push("portfoliogrid");
      } else if (page == "contactform") {
        this.$router.push("contactform");
      } else if (page == "aboutme") {
        this.$router.push("aboutme");
      }
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
/** SCROLL ANIMATION */
.before-enter {
  opacity: 0;
  transform: translateY(-100px);
  transition: all 2s ease-out;
}

.enter {
  opacity: 1;
  transform: translateY(0px);
}

// .prueba {
//   opacity: 0.5;
//   transition: all 1s ease-out;
// }
</style>
