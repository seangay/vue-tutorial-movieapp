import axios from 'axios'

const movieAxiosInstance = axios.create({
  baseURL: 'http://www.omdbapi.com/?apikey=b76b385c&page=1&type=movie&Content-Type=application/json',
  timeout: 1000
});

export default {
  fetchMovieCollection (name) {
    return movieAxiosInstance.get('&s=' + name)
      .then(response => {
        return response.data
      })
  },

  fetchSingleMovie (id) {
    return movieAxiosInstance.get('&i=' + id)
      .then(response => {
        return response.data
      })
  }
}