export default function SearchInput({setSearchTerm,placeholder}){
    return(
        <div className="search-container">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder={placeholder} onChange={(e) => setSearchTerm(e.target.value)}/>
        </div>
    )
}