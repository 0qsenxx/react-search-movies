import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [notFoundResults, setNotFoundResults] = useState("");
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
  //   console.log(typeof reviews === 'object')
  //   console.log(reviews);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.results.length > 0) {
          setReviews(res.results);
        } else
          setNotFoundResults(
            "Unfourtantly, we couldnʼt find reviews about this film"
          );
      })
      .catch((err) => console.error(err));
  }, [options, movieId]);

  return (reviews || notFoundResults) && typeof reviews === "string" ? (
    <p>{notFoundResults}</p>
  ) : (
    <ul>
      {reviews.map((review) => (
        <li key={review.id}>
          {/* <img
            src={`https://image.tmdb.org/t/p/w200/${review.author_details.avatar_path}`}
            alt="reviewerImg"
          /> */}
          <h2>Author: {review.author}</h2>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
