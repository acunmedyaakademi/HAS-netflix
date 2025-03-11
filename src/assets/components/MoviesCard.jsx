export default function MoviesCard({film}){
    return(
        <div className="movie-card">
            {/* <img src={film.image} alt="" /> */}
            <div className="movie-info">
                <p>{film.release_date ? film.release_date.substring(0, 4): "Not Found"} .</p>
                <p><i className="fa-solid fa-film"></i>{film.type}</p>
                <p>{film.age_rating}</p>
                <h3>{film.title}</h3>
            </div>
        </div>
    )
}