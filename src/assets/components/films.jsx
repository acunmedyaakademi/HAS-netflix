import { useEffect, useState } from "react"
import Loading from "./Loading";
import MoviesCard from "./MoviesCard";

export default function Films(){
    const [films,setFilms] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    useEffect(() => {
        const getFilms = async() =>{
            try{
                const res = await fetch("https://clonejson.vercel.app/api/movies");
                if(!res.ok){
                    throw new Error("Bir hata oluştu");
                }
                const data = await res.json();
                console.log(data);
                
                setFilms(data);
            }catch(err){
                console.log(err);
            }finally {
                setTimeout(() => {
                setIsLoading(false);
                },1000)
              }
        }
        getFilms();
    },[])

    if(isLoading){
        return(
            <>
                <Loading />
            </>
        )
    }
    return (
        <div className="movies-container">
            <h1>Movies</h1>
            <div>
                {
                    films.filter(film => film.type === "movie") .map(film => {
                            return <MoviesCard key={film.id} film={film} />
                        })
                }
            </div>
        </div>
    );
}