import { Outlet } from "react-router-dom"
import { List } from "../components/List"

export function MyList(){
    return(
        <div className="div bg-dark">
            <div className="container pb-5">
                <h1 className="text-white pt-5 pb-4">la mia lista</h1>
                <Outlet/>
                <List title={"My List"}/>            
            </div>
        </div>
    )
}