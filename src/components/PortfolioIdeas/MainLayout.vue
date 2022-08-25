<template>
  <div>
    <Presentation></Presentation>
    <LanguageSlider></LanguageSlider>
    <FormacionTrabajo></FormacionTrabajo>
    <PortfolioGrid></PortfolioGrid>
    <ContactForm></ContactForm>
  </div>
</template>

<script lang="ts">
import vue from "vue";
import { Component } from "vue-property-decorator";
import Presentation from "./Presentation.vue";
import LanguageSlider from "./LanguageSlider.vue";
import FormacionTrabajo from "./FormacionTrabajo.vue";
import PortfolioGrid from "./PortfolioGrid.vue";
import ContactForm from "./ContactForm.vue";
@Component({
  components: {
    Presentation,
    LanguageSlider,
    FormacionTrabajo,
    PortfolioGrid,
    ContactForm,
  },
})
export default class MainLayout extends vue {}
</script>

<style lang="scss" scoped></style>
