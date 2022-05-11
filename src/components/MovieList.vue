<template>
  <div>
    <h1>Lista de peliculas</h1>
    <ul>
      <li v-for="movie in movies" :key="movie">{{ movie.title }}</li>
    </ul>
    <span class="anterior" @click="pagAnterior()">Anterior</span>
    Pagina {{ currentPage }}
    <span class="siguiente" @click="pagSiguiente()">Siguiente</span>
  </div>
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
    pagAnterior() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.fetchData();
      }
    },
    pagSiguiente() {
      this.currentPage++;
      this.fetchData();
    },
  },
};
</script>
