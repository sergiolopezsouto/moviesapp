<template>
  <v-app>
    <v-app-bar app color="black" dark>
      <v-toolbar-title class="title">
        <router-link to="/" tag="span"> MOVIES APP </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn to="/movies" text> Movies </v-btn>
        <v-btn to="/about" text> About </v-btn>
        <v-btn to="/register" text> Register </v-btn>
        <v-btn to="/login" text> Login </v-btn>
        <v-btn to="/create" text> Create </v-btn>
        <v-btn to="/profile" text> Profile </v-btn>
        <v-btn to="/" text> Logout </v-btn>
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
