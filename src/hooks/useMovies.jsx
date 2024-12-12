import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../GlobalContext";

const MOVIE_API =
  "https://api.themoviedb.org/3/discover/movie?api_key=3a55960cb8d2cc735fc2a215dc42af3e";

function useMovies() {

  const [movies, setMovies] = useState([]);

  function fetchData(url, params = {}) {
    axios.get(url, { params }).then((response) => {
      setMovies(response.data.results);
    });
  };

  useEffect(() => {
    fetchData(MOVIE_API);
  }, []);

  return [movies, fetchData];
}

export default useMovies;
