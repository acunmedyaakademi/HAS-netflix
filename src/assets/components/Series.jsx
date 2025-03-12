import { useEffect, useState } from "react"
import Loading from "./Loading";
import SeriesCard from "./SeriesCard";

export default function Series(){
    const [series, setSeries] = useState([]);
    const [isLoading,setIsLoading] = useState(true);

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
    return(
        <div className="films-container">
            <h1>TV Series</h1>
            <div className="movies-container">
                {
                    series.filter(serie => serie.type === "series") .map(serie => {
                            return <SeriesCard key={serie.id} serie={serie} />
                        })
                }
            </div>
        </div>
    )
}