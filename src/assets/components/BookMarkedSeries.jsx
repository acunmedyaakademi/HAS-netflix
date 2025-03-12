import { useState } from "react";

export default function BookMarkedSeries({serie}){
    const [isBookMark, setIsBookMark] = useState(false);


    const handleBookMark = () =>{
        setIsBookMark(!isBookMark);

        const favoriteSeries = JSON.parse(localStorage.getItem("favorites")) || [];

        if(!isBookMark){
            favoriteSeries.push(serie);
        }else{
            const updatedSeries = favoriteSeries.filter(s => s.id !== serie.id);
            localStorage.setItem("favorites",JSON.stringify(updatedSeries));
            return;
        }
        localStorage.setItem("favorites",JSON.stringify(favoriteSeries));
    }

    return(
        <button className="bookmark-btn" onClick={handleBookMark}>
            {isBookMark ? <i class="fa-solid fa-bookmark"></i>  : <i class="fa-regular fa-bookmark"></i>}
        </button>
    )
}