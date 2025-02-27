import { List } from "../components/List";
import { Footer } from '../components/Footer/Footer'
import { uriMovieBase, uriTvBase } from "../utils/util";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../utils/GlobalContext";
import { Outlet } from "react-router-dom";

export function RecentlyAdd(){
    const { setUriTv, setUriMovie } = useContext(GlobalContext) 
    let latestMovies =  uriMovieBase + "&sort_by=primary_release_date.desc";
    let latestSeries =  uriTvBase + "&sort_by=first_air_date.desc";

    useEffect(() => {//use effect che al montaggio del componente invoca queste due funzioni    
        setUriMovie(latestMovies) //questa aggiorna il valore dell'uri dei movie
        setUriTv(latestSeries) //questa aggiorna il valore dell'uri delle serie 
    }, []);

    return(
        <div className="div bg-dark">
            <div className="container">
                <Outlet/>
                <List title={"Film"}/>
                <List title={"Serie Tv"}/>
                <Footer/>
            </div>
        </div>
    )
}