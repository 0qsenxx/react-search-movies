import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import styles from "./MovieDetails.module.css";

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();
  const navigate = useNavigate();
  const yearOfRelese = new Date(movieDetails.release_date).getFullYear();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=c4f9ec0cbf8eb10a47a6f57775525038&language=en-US`
    )
      .then((res) => res.json())
      .then((res) => {
        setMovieDetails(res);
      })
      .catch((err) => console.error(err));
  }, [movieId]);

  // console.log(movieDetails.genres);

  return (
    Object.keys(movieDetails).length > 0 && (
      <main>
        <button type="button" onClick={() => navigate("/")}>
          Go back
        </button>
        <div className={styles.movieDetailsBox}>
          <img
            src={`https://image.tmdb.org/t/p/w300/${movieDetails.poster_path}`}
            alt="poster"
          />
          <div>
            <h2>{`${movieDetails.title} (${yearOfRelese})`}</h2>
            <p>{Math.round(movieDetails.vote_average * 10)} %</p>
            <h2>Overview</h2>
            <p>{movieDetails.overview}</p>
            <h2>Genres</h2>
            <ul className={styles.movieDetailsGenresList}>
              {movieDetails.genres.map((genre) => (
                <li key={genre.id}>
                  <p>{genre.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h3>Additional information</h3>
          <nav>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <Outlet />
        </div>
      </main>
    )
  );
};

export default MovieDetails;
