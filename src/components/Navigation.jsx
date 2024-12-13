import { NavLink } from "react-router-dom";


export function Navigation(){
    return(
        <div className="row align-items-center ">
            <div className="col">
                <h1 className="text-danger">Boolflix</h1>
            </div>
            <div className="col">
                <NavLink className="nav_link" to="/">Home</NavLink>
            </div>
            <div className="col">
                <NavLink className="nav_link" to="/SerieTv">Serie Tv</NavLink>
            </div>
            <div className="col">
                <NavLink className="nav_link" to="/Film">Film</NavLink>
            </div>
            <div className="col">
                <NavLink className="nav_link" to="/Originali">Originali</NavLink>
            </div>
            <div className="col">
                <NavLink className="nav_link" to="/AggiuntiRecente">Aggiunti di Recente</NavLink>
            </div>
            <div className="col">
                <NavLink className="nav_link" to="/LaMiaLista">La Mia Lista di Recente</NavLink>
            </div>   
        </div>
    )
}