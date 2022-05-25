<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title class="title">
        <router-link to="/" tag="span"> MOVIES APP </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn to="/movies" text> Movies </v-btn>
        <v-btn to="/about" text> About </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.title {
  cursor: pointer;
}
</style>
