export default function Sidebar({navigate,page}){

    const changeMenu = (e) => {
        e.preventDefault();
        const link = e.target.closest("a");
        if (link) {
            const path = new URL(link.href, window.location.origin).pathname;
            navigate(path);
        }
    }
    return (
        <div className="sidebar-container">
            <i className="fa-solid fa-clapperboard logo"></i>
            <div className="sidebar-icons">
                <a href="/home" onClick={changeMenu}><i class="fa-solid fa-table-cells-large"></i></a>
                <a href="/filmler" onClick={changeMenu}><i className="fa-solid fa-film"></i></a>
                <a href="/diziler" onClick={changeMenu}><i className="fa-solid fa-tv"></i></a>
                <a href="/favoriler" onClick={changeMenu}><i className="fa-solid fa-bookmark"></i></a>
            </div>
            <a href="/profil" onClick={changeMenu}><i className="fa-solid fa-user profile"></i></a>
        </div>
    )
}