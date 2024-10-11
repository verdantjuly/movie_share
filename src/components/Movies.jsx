import { useEffect, useState } from "react";
import Movie from "./Movie";
import axios from "axios";
import "./Movies.css";
export default function Movies() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        "https://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json"
      );

      setMovies(res.data.articleList);
    }
    fetchData();
  }, []);
  return (
    <ul>
      {movies.map((movie) => (
        <Movie movie={movie} />
      ))}
    </ul>
  );
}
