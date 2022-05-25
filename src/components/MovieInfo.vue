<template>
  <v-container v-if="movie">
    <v-row>
      <v-col cols="12" sm="6">
        <v-img :src="getImageSrc(movie)"></v-img>
      </v-col>
      <v-col cols="12" sm="6">
        <v-row>
          <v-col cols="4"><span class="label">Title</span></v-col>
          <v-col cols="8"> {{ movie.title }} </v-col>
          <v-col cols="4"><span class="label">Release Date</span></v-col>
          <v-col cols="8"> {{ movie.release_date }} </v-col>
          <v-col cols="4"><span class="label">Genres</span></v-col>
          <v-col cols="8">
            {{ movie.genres.map((e) => e.name).join(", ") }}
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MovieInfo",
  data() {
    return {
      movie: null,
    };
  },
  async created() {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        this.$route.params.movieId +
        "?api_key=a4af8c392d0da1e059b8a66e13fda4ac"
    );
    this.movie = await response.json();
  },
  methods: {
    /*     getYear(dateAsString) {
      return dateAsString.subtr(0, 4);
    }, */
    getImageSrc(movie) {
      if (!movie.poster_path) return "/placeholder_large.png";
      return `https://image.tmdb.org/t/p/w500/${movie.poster_path}`; //para incluir texto interpolando elementos de js
    },
  },
};
</script>

<style scoped>
.label {
  font-weight: bold;
}
</style>
