<template>
  <v-container class="imagen">
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col cols="12" class="texto">
        <h1>MOVIES TRACKER APP</h1>
        <h3>registrate o inicia sesion para disfrutar mejor de la app</h3>
        <h3>o continúa sin loggear</h3>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
.imagen {
  margin-top: 80px;
}
.texto {
  margin-top: 10px;
}
</style>
