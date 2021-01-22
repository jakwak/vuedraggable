<template>
  <div id="app">
    <v-app>
      <v-content>
        <Parent/>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import Parent from "./components/Parent";

export default {
  name: "App",
  components: {
    Parent
  }
};
</script>