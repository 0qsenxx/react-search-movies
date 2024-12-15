import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Movies from "./components/Movies/Movies";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import Reviews from "./components/Reviews/Reviews";
import Cast from "./components/Cast/Cast";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="reviews" element={<Reviews />} />
          <Route path="cast" element={<Cast />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
