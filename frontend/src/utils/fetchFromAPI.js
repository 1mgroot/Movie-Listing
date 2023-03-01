const API_KEY = `9496cf73fa27b7ee8376e145cb4f69dc`;

export const fetchMoviesByCategory = (category, page) => {
  const url = `https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&page=${page}`;

  return fetch(url).then((resp) => {
    return resp.json();
  });
};