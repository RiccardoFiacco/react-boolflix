import { Outlet } from "react-router-dom"
import { List } from "../components/List"

export function MyList(){
    return(
        <div className="div bg-dark">
            <div className="container pb-5">
                <Outlet/>
                <List title={"My List"}/>            
            </div>
        </div>
    )
}