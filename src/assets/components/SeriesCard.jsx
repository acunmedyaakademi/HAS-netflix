import { useEffect, useState } from "react";
import BookMark from "./BookMark";
import BookMarkedSeries from "./BookMarkedSeries";

export default function SeriesCard({serie}){
    return(
        <div className="movie-card">
            <div className="movie-info">
                <div className="image-container">
                    <img src={serie.image} alt="" />
                    <BookMarkedSeries serie={serie} />
                </div>
                <div className="info">
                    <p>{serie.release_date ? serie.release_date.substring(0, 4): "Not Found"} .</p>
                    <p><i class="fa-solid fa-tv"></i>  {serie.type} .</p>
                    <p>{serie.age_rating}</p>
                </div>
                <h3>{serie.title}</h3>
            </div>
        </div>
    )
}