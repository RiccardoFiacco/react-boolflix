import { List } from "../components/List";
import { Footer } from '../components/Footer/Footer'
import { uriMovieBase, uriTvBase, axiosSetCall } from "../utils/util";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../utils/GlobalContext";

export function RecentlyAdd(){
    const {setMovies, setTvSeries, setUriTv, setUriMovie} = useContext(GlobalContext) 
    let latestMovies =  uriMovieBase + "&sort_by=primary_release_date.desc";
    let latestSeries =  uriTvBase + "&sort_by=first_air_date.desc";

    useEffect(() => {//use effect che al montaggio del componente invoca queste due funzioni
        axiosSetCall(latestMovies, setMovies); //questa recupera e aggiorna la variabile movies
        axiosSetCall(latestSeries, setTvSeries); //questa recupera e aggiorna la variabile tvSeries    
        setUriMovie(latestMovies) //questa aggiorna il valore dell'uri dei movie
        setUriTv(latestSeries) //questa aggiorna il valore dell'uri delle serie 
    }, []);

    return(
        <div className="div bg-dark">
            <div className="container">
                <List title={"Film"}/>
                <List title={"Serie Tv"}/>
                <Footer/>
            </div>
        </div>
    )
}