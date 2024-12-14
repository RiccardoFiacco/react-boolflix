import { List } from "../components/List";
import { Footer } from '../components/Footer/Footer'
import { uriMovieBase, uriTvBase, axiosSetCall } from "../utils/util";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../utils/GlobalContext";

export function HighestRated(){
    const {setMovies, setTvSeries} = useContext(GlobalContext) 
    let movieDesc =  uriMovieBase + "&sort_by=vote_average.desc";
    let seriesDesc =  uriTvBase + "&sort_by=vote_average.desc";

    useEffect(() => {//use effect che al montaggio del componente invoca queste due funzioni
        axiosSetCall(movieDesc, setMovies); //questa recupera e aggiorna la variabile movies
        axiosSetCall(seriesDesc, setTvSeries); //questa recupera e aggiorna la variabile tvSeries    
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