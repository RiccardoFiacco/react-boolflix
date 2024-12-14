import { NavLink } from "react-router-dom";


export function Navigation(){
    return(
        <div className="row align-items-center justify-content-center">
            <div className="col">
                <h1 className="text-danger">Boolflix</h1>
            </div>
            <div className="col">
                <NavLink className="nav_link" to="/">Home</NavLink>
            </div>
            <div className="col">
                <NavLink className="nav_link" to="/Series">Serie Tv</NavLink>
            </div>
            <div className="col">
                <NavLink className="nav_link" to="/Film">Film</NavLink>
            </div>
            <div className="col">
                <NavLink className="nav_link" to="/Original">Originali</NavLink>
            </div>
            <div className="col">
                <NavLink className="nav_link" to="/Recently-add">Aggiunti di Recente</NavLink>
            </div>
            <div className="col">
                <NavLink className="nav_link" to="/MyList">La Mia Lista</NavLink>
            </div>   
        </div>
    )
}