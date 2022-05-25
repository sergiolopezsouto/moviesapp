<template>
  <v-card>
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
      return `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`; //para incluir texto interpolando elementos de js
    },
  },
};
</script>
