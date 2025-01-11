import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
// import HomePage from "./components/HomePage/HomePage";
const HomePage = lazy(() => import("./components/HomePage/HomePage"));
// import Movies from "./components/Movies/Movies";
const Movies = lazy(() => import("./components/Movies/Movies"));
// import MovieDetails from "./components/MovieDetails/MovieDetails";
const MovieDetails = lazy(() =>
  import("./components/MovieDetails/MovieDetails")
);
// import Reviews from "./components/Reviews/Reviews";
const Reviews = lazy(() => import("./components/Reviews/Reviews"));
// import Cast from "./components/Cast/Cast";
const Cast = lazy(() => import("./components/Cast/Cast"));

function App() {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="reviews" element={<Reviews />} />
            <Route path="cast" element={<Cast />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
