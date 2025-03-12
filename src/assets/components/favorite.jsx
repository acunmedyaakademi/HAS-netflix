import { useEffect, useState } from "react";
import MoviesCard from "./MoviesCard";
import SeriesCard from "./SeriesCard";
import BookMarkedMovies from "./BookMarkedMovies";
import BookMarkedSeries from "./BookMarkedSeries";

export default function Favorites() {
    const [favoriteMovies, setFavoriteMovies] = useState([]);
    const [favoriteSeries, setFavoriteSeries] = useState([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        const movies = storedFavorites.filter((item) => item.type === "movie");
        const series = storedFavorites.filter((item) => item.type === "series");

        setFavoriteMovies(movies);
        setFavoriteSeries(series);
    }, []);

    return (
        <>
            <div>
                <h2 className="header">Bookmarked Movies</h2>
                <div className="movies-container films-container">
                    {favoriteMovies.length > 0 ? (
                        favoriteMovies.map((film) => (
                            <MoviesCard key={film.id} film={film} />
                        ))
                    ) : (
                        <p>No bookmarked movies yet.</p>
                    )}
                </div>
            </div>

            <div>
                <h2 className="header">Bookmarked TV Series</h2>
                <div className="movies-container films-container">
                    {favoriteSeries.length > 0 ? (
                        favoriteSeries.map((serie) => (
                            <SeriesCard key={serie.id} serie={serie} />
                        ))
                    ) : (
                        <p>No bookmarked TV series yet.</p>
                    )}
                </div>
            </div>
        </>
    );
}
