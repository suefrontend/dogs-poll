<template>
  <div class="container">
    <div class="row mb" v-for="dog in dogs" :key="dog">
      <div class="col">
        <img :src="dog.imgPath">
      </div>

      <div class="col-10">
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            :style="{width: percentage(dog) + '%'}"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >{{ dog.breed }} {{ percentage(dog) }}% ({{ dog.vote }}人)</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    dogs() {
      return this.$store.getters.dogs;
    },
    ...mapGetters(["percentage"])
  },
  methods: {
    percentage(id) {
      this.$store.dispatch("percentageAction", id);
    }
  }
};
</script>

<style>
.mb {
  margin-bottom: 10px;
}
</style>