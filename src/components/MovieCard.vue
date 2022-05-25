<template>
  <v-card :to="{ name: 'MovieInfo', params: { movieId: movie.id } }">
    <v-img class="white--text align-end" :src="getImageSrc(movie)">
      <v-card-title> {{ movie.title }} </v-card-title>
    </v-img>
  </v-card>
</template>

<script>
export default {
  name: "MovieCard",
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getImageSrc(movie) {
      if (!movie.backdrop_path) return "/placeholder_small.png";
      return `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`; //para incluir texto interpolando elementos de js
    },
  },
};
</script>
