import { useState } from "react";
import "../../style/trendingcard.css";

export default function TrendingCard({ movies }) {
  const [moviesTrend, setMoviesTrend] = useState(
    movies.filter((movie) => movie.trending)
  );

  return (
    <>
      {moviesTrend.map((movie) => (
        <div key={movie.image}>
          <img className="movie-img" src={movie.image} alt="" />
          <div>
            <i className="fa-solid fa-bookmark"></i>
            <div>
              <span className="release_date">{movie.release_date.split("-")[0]}</span> 
              <span className="dot">.</span> 
              <i className="fa-solid fa-film"></i>
              <span className="">{movie.type}</span> 
              <span className="dot">.</span> 
              <span>{movie.age_rating}</span> 
            </div>
            <h2>{movie.title}</h2>
          </div>
        </div>
      ))}
    </>
  );
}
