import axios from "axios";
import { useEffect, useState } from "react";

const MOVIE_API =
  "https://api.themoviedb.org/3/discover/movie?api_key=3a55960cb8d2cc735fc2a215dc42af3e";

const useMovies = () => {
  const [movies, setMovies] = useState([]);

  const fetchData = () => {
    axios.get(MOVIE_API).then((response) => {
      setMovies(response.data.results);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [movies, fetchData];
};

export default useMovies;
