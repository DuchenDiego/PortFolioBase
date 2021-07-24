/* eslint-disable */
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import GridExample from '../views/Flex_Grid/GridExample.vue';
import GridTwo from '../views/Flex_Grid/GridExampleTwo.vue';
import FlexExample from '../views/Flex_Grid/FlexExample.vue';
import FlexExampleTwo from '../views/Flex_Grid/FlexExampleTwo.vue';
import FlexLab from '../views/Flex_Grid/FlexLab.vue';
import Transitions from '../views/Animations/Transitions.vue';
import SassExample from '../views/SassExamples/SassExample.vue';
import Main from '@/components/PortfolioIdeas/Main.vue';
import Presentation from '@/components/PortfolioIdeas/Presentation.vue';
import LanguageSlider from '@/components/PortfolioIdeas/LanguageSlider.vue';
import FormacionTrabajo from '@/components/PortfolioIdeas/FormacionTrabajo.vue';
import PortfolioGrid from '@/components/PortfolioIdeas/PortfolioGrid.vue';
import ContactForm from '@/components/PortfolioIdeas/ContactForm.vue';
import AboutMe from '@/components/PortfolioIdeas/AboutMe.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  { path: '/grid', name: 'GridExample', component: GridExample },
  { path: '/gridTwo', name: 'GridTwo', component: GridTwo },
  { path: '/flex', name: 'FlexExample', component: FlexExample },
  { path: '/flexTwo', name: 'FlexExampleTwo', component: FlexExampleTwo },
  { path: '/flexLab', name: 'FlexLab', component: FlexLab },
  { path: '/transitions', name: 'Transitions', component: Transitions },
  { path: '/sassex', name: 'SassExample', component: SassExample },
  { path: '/main', name: 'Main', component: Main },
  { path: '/presentation', name: 'Presentation', component: Presentation },
  {
    path: '/languageslider',
    name: 'LanguageSlider',
    component: LanguageSlider,
  },
  {
    path: '/trabajoformacion',
    name: 'FormacionTrabajo',
    component: FormacionTrabajo,
  },
  {
    path: '/portfoliogrid',
    name: 'PortfolioGrid',
    component: PortfolioGrid,
  },
  {
    path: '/contactform',
    name: 'ContactForm',
    component: ContactForm,
  },
  {
    path: '/aboutme',
    name: 'AboutMe',
    component: AboutMe,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
