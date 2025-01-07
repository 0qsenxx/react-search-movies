import Header from "../Header/Header";
import { useState, useEffect, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import styles from "./Movies.module.css";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const options = useMemo(
    () => ({
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGY5ZWMwY2JmOGViMTBhNDdhNmY1Nzc3NTUyNTAzOCIsIm5iZiI6MTczMzU5Mjg4Mi4xODMsInN1YiI6IjY3NTQ4NzMyODcxYTQyYzljMjQ1NjlhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sorPfk3DQRthB6ezndCgQSJ4wqTDhYFw6I8mLnxjSA4",
      },
    }),
    []
  );

  const searchMovies = (evt) => {
    evt.preventDefault();
    setSearchParams({ query: evt.target.elements.searchMovieInput.value });
  };

  useEffect(() => {
    const query = searchParams.get("query");

    if (query === null) return;

    fetch(`https://api.themoviedb.org/3/search/movie?query=${query}`, options)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMovies(data.results);
      });
  }, [searchParams, options]);

  return (
    <>
      <Header />
      <form onSubmit={searchMovies}>
        <input type="text" name="searchMovieInput" />
        <button type="submit">Search</button>
      </form>
      <ul className={styles.moviesList}>
        {movies.map((film) => {
          return (
            <li key={film.id} className={styles.moviesItem}>
              <img
                src={`https://image.tmdb.org/t/p/w200/${film.poster_path}`}
                alt="poster"
              />
              <Link to={`/movies/${film.id}`}>
                {film.hasOwnProperty("title") ? film.title : film.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Movies;
