import { useState } from "react";

export default function BookMarkedMovies({film}){
    const [isBookMark, setIsBookMark] = useState(false);


    const handleBookMark = () =>{
        setIsBookMark(!isBookMark);

        const favoriteFilms = JSON.parse(localStorage.getItem('favorites')) || [];

        if(!isBookMark){
            favoriteFilms.push(film);
        }else{
            const updatedFilms = favoriteFilms.filter(f => f.id !== film.id);
            localStorage.setItem("favorites",JSON.stringify(updatedFilms));
            return;
        }
        localStorage.setItem("favorites",JSON.stringify(favoriteFilms));
    }

    return(
        <button className="bookmark-btn" onClick={handleBookMark}>
            {isBookMark ? <i class="fa-solid fa-bookmark"></i>  : <i class="fa-regular fa-bookmark"></i>}
        </button>
    )
}