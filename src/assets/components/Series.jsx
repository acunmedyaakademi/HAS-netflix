import { useEffect, useState } from "react"
import Loading from "./Loading";
import SeriesCard from "./SeriesCard";
import SearchInput from "./SearchInput";


export default function Series(){
    const [series, setSeries] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");


    useEffect(() =>{
        const getSeries = async() => {
            try{
                const res = await fetch("https://clonejson.vercel.app/api/movies");
                if(!res.ok){
                    throw new Error("Bir hata oluştu");
                }
                const data = await res.json();
                setSeries(data);
            }catch(err){
                console.log(err);
                
            }finally{
                setTimeout(() => {
                setIsLoading(false);
                },1000)
            }
        }
        getSeries();
    },[])

    if(isLoading){
        return(
            <>
                <Loading />
            </>
        )
    }
    const filteredSeries = series.filter(serie => serie.type === "series" && serie.title.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <>
            <SearchInput setSearchTerm={setSearchTerm} placeholder="Search for TV series" />
            <div className="films-container">
                <h1>TV Series</h1>
                <div className="movies-container">
                    {filteredSeries.length > 0 ? (
                        filteredSeries.map((serie) => <SeriesCard key={serie.id} serie={serie} />)
                    ) : (
                        <p>No TV series found.</p>
                    )}
                </div>
            </div>
        </>
    );
}