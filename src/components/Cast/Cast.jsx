import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
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
      `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => {
        setCast(res.cast);
      })
      .catch((err) => console.error(err));
  }, [options, movieId]);

  return (
    <ul>
      {cast.map((actor) => (
        <li key={actor.id}>
          <img
            src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
            alt="actorImg"
          />
          <p>{actor.name}</p>
          <p>Character: {actor.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
