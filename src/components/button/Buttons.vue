<template>
  <div class="container mt">
    <app-button></app-button>
  </div>
</template>


<script>
import Button from "./Button.vue";

export default {
  components: {
    appButton: Button
  }
};
</script>
<style>
.mt {
  margin-top: 20px;
}
</style>
