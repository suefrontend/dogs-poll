<template>
  <app-result></app-result>
</template>


<script>
import Result from "./Result.vue";

export default {
  components: {
    appResult: Result
  }
};
</script>

<style>
img {
  width: 40px;
  border-radius: 5px;
  margin-left: 10px;
}
.progress {
  height: 40px;
}
</style>