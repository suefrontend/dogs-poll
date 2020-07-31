<template>
  <div class="container">
    <app-header></app-header>

    <app-results></app-results>

    <app-buttons></app-buttons>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Buttons from "./components/button/Buttons.vue";
import Results from "./components/result/Results.vue";

export default {
  components: {
    appHeader: Header,
    appButtons: Buttons,
    appResults: Results
  }
};
</script>

<style>
</style>
