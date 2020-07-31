<template>
  <div class="row row-cols-3">
    <div class="col-sm-4 col-xs-4" v-for="(dog, index) in dogs" :key="index">
      <button type="button" 
              class="btn btn-primary"
              @click="vote(dog.id)"
              >{{ dog.breed }}</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    dogs() {
      return this.$store.getters.dogs;
    }
  },
  methods: {
    vote(id) {
      this.$store.dispatch("voteAction", id);
    }
  }
};
</script>

<style>
button {
  width: 100%;
  margin: 0 0 10px 0;
}
</style>