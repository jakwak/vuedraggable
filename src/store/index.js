import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cardArray: [
      {
        title: "Hello",
        src:
          "https://images.unsplash.com/photo-1557773910-e340bfebbe62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
      },
      {
        title: "Hey",
        src:
          "https://www.humanesociety.org/sites/default/files/styles/768x326/public/2018/08/kitten-440379.jpg?h=c8d00152&itok=vU0J0uZR"
      }
    ]
  },
  getters: {
    getCardArray: state => state.cardArray
  },
  mutations: {
    setCardArray(state, payload) {
      state.cardArray = payload;
    }
  }
});
