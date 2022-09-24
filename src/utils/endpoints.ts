const API_KEY:string="02b77c5aa311d5da8c767d1ce0d8e3f9";

const endpoints = {

    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  
    fetchDocumantaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,

    fetchTrailer: `/videos?api_key=${API_KEY}`,

    fetchGenre:`/list?api_key=${API_KEY}`,

    fetchSimilar:`/similar?api_key=${API_KEY}`,
    
    fetchSearch: `?api_key=${API_KEY}&page=1&query=`
  }

  export default endpoints;