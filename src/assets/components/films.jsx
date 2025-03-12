import { useEffect, useState } from "react"
import Loading from "./Loading";
import MoviesCard from "./MoviesCard";
import SearchInput from "./SearchInput";

export default function Films(){
    const [films,setFilms] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

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

    const filteredFilms = films.filter(film => film.type === "movie" && film.title.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <>
            <SearchInput setSearchTerm={setSearchTerm} placeholder="Search for movies" />
            <div className="films-container">
                <h1>Movies</h1>
                <div className="movies-container">
                    {filteredFilms.length > 0 ? (
                        filteredFilms.map((film) => <MoviesCard key={film.id} film={film} />)
                    ) : (
                        <p>No movies found.</p>
                    )}
                </div>
            </div>
        </>
    );
}