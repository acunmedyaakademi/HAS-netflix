const DATAPATH = "https://clonejson.vercel.app/api/movies";
import { useEffect, useState } from "react";
import TrendingCard from "./TrendingCard";

export default function Trending() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(DATAPATH);

        if (!response.ok) {
          setMovies([]);
          setError("Hata! Veriler alınamadı.");
          return;
        }

        const data = await response.json();
        setMovies(data);
        setIsLoading(false);
      } catch (e) {
        setMovies([]);
        setError("Veriler getirilirken hata oluştu.");
        setIsLoading(false);
      }
    }
    getData();
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Yükleniyor...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>{error}</h1>
      </div>
    );
  }

  return (
    <>
      <h1>Trending</h1>
      <div>
        <TrendingCard movies={movies}/>
      </div>
    </>
  );
}
