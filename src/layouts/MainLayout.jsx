import { useEffect, useState } from "react"
import App from "../App";
import HomePage from "../assets/components/HomePage";
import Sidebar from "../assets/components/Sidebar";

export default function MainLayout(){
    const [page,setPage] = useState(window.location.pathname);
    useEffect(()=>{
        const handlePopState = () => setPage(window.location.pathname);
        window.addEventListener("popstate",handlePopState);

        return () => window.removeEventListener('popstate',handlePopState,);
    },[])

    const navigate = (path) => {
        window.history.pushState({},"", path);
        setPage(path);
    }
    return(
        <div>
            <Sidebar navigate={navigate} page={page} />
            <div>
                <App>
                    {page === "/home" && <HomePage navigate={navigate}/>}
                </App>
            </div>
        </div>
    )
}