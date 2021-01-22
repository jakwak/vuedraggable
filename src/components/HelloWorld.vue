<template>
  <v-flex xs4>
    <v-card class="mx-4">
      <v-img :src="src"></v-img>
      <v-card-title primary-title>
        <div>{{title}}</div>
      </v-card-title>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    title: String,
    src: String,
    id: Number
  },
  data() {
    return {};
  }
};
</script>
