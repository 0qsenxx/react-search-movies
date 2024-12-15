import { useState, useEffect, useMemo } from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const [topFilms, setTopFilms] = useState([]);
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

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY&language=en-US&page=1",
      options
    )
      .then((res) => res.json())
      .then((res) => {
        setTopFilms(res.results);
      })
      .catch((err) => console.error(err));
  }, [options]);

  //   console.log(topFilms);

  return (
    <>
      <Header />
      <ul className={styles.moviesList}>
        {topFilms.map((film) => {
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

export default HomePage;
