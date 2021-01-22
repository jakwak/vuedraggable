<template>
  <v-container>
    <v-layout class="mt-5 align-center justify-center row fill-height">
      <h2>Parent Component</h2>
    </v-layout>
    <draggable tag="v-layout" v-model="draggableCards">
      <template v-for="(tech,i) in getCardArray">
        <HelloWorld :src="tech.src" :title="tech.title" :key="i"/>
      </template>
    </draggable>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import HelloWorld from "./HelloWorld";
import draggable from "vuedraggable";
export default {
  components: {
    draggable,
    HelloWorld
  },
  computed: {
    ...mapGetters({
      getCardArray: "getCardArray"
    }),
    draggableCards: {
      get() {
        return this.$store.state.cardArray;
      },
      set(val) {
        this.$store.commit("setCardArray", val);
      }
    }
  },
  methods: {
    ...mapMutations({
      setCardArray: "setCardArray"
    })
  }
};
</script>

