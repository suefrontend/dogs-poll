import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    dogs: [
      {
        id: 1,
        breed: "ビーグル",
        imgPath: require("../assets/icon-beagle.jpg"),
        vote: 0
      },
      {
        id: 2,
        breed: "コーギー",
        imgPath: require("../assets/icon-corgi.jpg"),
        vote: 0
      },
      {
        id: 3,
        breed: "レトリバー",
        imgPath: require("../assets/icon-retriever.jpg"),
        vote: 0
      },
      {
        id: 4,
        breed: "パグ",
        imgPath: require("../assets/icon-pug.jpg"),
        vote: 0
      },
      {
        id: 5,
        breed: "ピットブル",
        imgPath: require("../assets/icon-pitbull.jpg"),
        vote: 0
      },
      {
        id: 6,
        breed: "ラブラドール",
        imgPath: require("../assets/icon-labrador.jpg"),
        vote: 0
      }
    ]
  },
  getters: {
    dogs: state => {
      return state.dogs;
    },
    percentage: (_state, getters) => dog => {
      const totalVotes = getters.totalVotes;
      return totalVotes ? Math.floor((100 * dog.vote) / totalVotes) : 0;
    },
    totalVotes: state =>
      state.dogs.reduce((count, dog) => (count += dog.vote), 0)
  },
  mutations: {
    vote: (state, payload) => {
      const index = state.dogs.findIndex(dog => dog.id === payload);
      state.dogs[index].vote++;
    }
  },
  actions: {
    voteAction(store, payload) {
      store.commit("vote", payload);
    }
  }
});
