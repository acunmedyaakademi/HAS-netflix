import { useState } from "react"

export default function MoviesCard({film}){
    const [isBookMark, setIsBookMark] = useState(false);

    const handleBookMark = () =>{
        setIsBookMark(!isBookMark);
    }
    return(
            <div className="movie-card">
                <div className="movie-info">
                    <div className="image-container">
                        <img src={film.image} alt="" />
                        <button className="bookmark-btn" onClick={handleBookMark}>
                            {isBookMark ? <i class="fa-solid fa-bookmark"></i>  : <i class="fa-regular fa-bookmark"></i>}
                        </button>
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