const API_KEY = `9496cf73fa27b7ee8376e145cb4f69dc`;
const URL_PREFIX = `https://api.themoviedb.org/3/movie`
export const fetchMoviesByCategory = (category, page) => {
  const url = `${URL_PREFIX}/${category}?api_key=${API_KEY}&page=${page}`;

  return fetch(url).then((resp) => {
    return resp.json();
  });
};

export const fetchMoviesDetailByID = (movie_id) => {
    // https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
    const url = `${URL_PREFIX}/${movie_id}?api_key=${API_KEY}&language=en-US`;
  
    return fetch(url).then((resp) => {
      return resp.json();
    });
  };