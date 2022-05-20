<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-center"> <h1>Lista de Películas</h1> </v-col>
      <v-col cols="12" sm="6" lg="3" v-for="movie in movies" :key="movie">
        {{ movie.title }}
      </v-col>
    </v-row>
    <v-pagination
      class="mt-10"
      v-model="currentPage"
      :length="500"
      total-visible="6"
      circle
    ></v-pagination>
  </v-container>
</template>

<script>
export default {
  name: "MovieList",
  data() {
    return {
      movies: [],
      currentPage: 1,
    };
  },
  watch: {
    currentPage() {
      this.fetchData();
    },
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=a4af8c392d0da1e059b8a66e13fda4ac&page=" +
          this.currentPage
      );
      this.movies = (await response.json()).results;
    },
  },
};
</script>
