import { useEffect, useState } from "react"
import BookMark from "./BookMark"
import BookMarkedMovies from "./BookMarkedMovies"

export default function MoviesCard({film}){

    return(
            <div className="movie-card">
                <div className="movie-info">
                    <div className="image-container">
                        <img src={film.image} alt="" />
                        <BookMarkedMovies film={film} />
                    </div>
                    <div className="info">
                        <p>{film.release_date ? film.release_date.substring(0, 4): "Not Found"} .</p>
                        <p><i className="fa-solid fa-film"></i>  {film.type} .</p>
                        <p>{film.age_rating}</p>
                    </div>
                    <h3>{film.title}</h3>
                </div>
            </div>
    )
}