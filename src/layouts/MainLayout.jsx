import { useState } from "react"
import HomePage from "../assets/components/HomePage";
import Sidebar from "../assets/components/Sidebar";

export default function MainLayout(){
    const [page,setPage] = useState();
    return(
        <div>
            <Sidebar />
            <div>
                <App>
                    {page === "/home" && <HomePage />}
                </App>
            </div>
        </div>
    )
}