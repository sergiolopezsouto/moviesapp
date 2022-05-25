export function getYear(dateAsString) {
  return dateAsString.subtr(0, 4);
}

export function getImageSrc(movie) {
  return `https://image.tmdb.org/t/p/w500/${movie.poster_path}`; //para incluir texto interpolando elementos de js
}

// min 10 del ultimo video del front para importarlo a las clases de vue
