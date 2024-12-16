import { List } from "../components/List";
import { Footer } from '../components/Footer/Footer'
import { uriMovieBase, uriTvBase } from "../utils/util";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../utils/GlobalContext";
import { Outlet } from "react-router-dom";

export function HighestRated(){
    const { setUriTv, setUriMovie } = useContext(GlobalContext)  //importo le variabili globali
    let movieDesc =  uriMovieBase + "&sort_by=vote_average.desc"; //creo l'url da cui recuperare i film con valutazione maggiore
    let seriesDesc =  uriTvBase + "&sort_by=vote_average.desc"; //creo l'url da cui recuperare le serie con valutazione maggiore

    useEffect(() => {//use effect che al montaggio del componente invoca queste 4 funzioni   
        setUriMovie(movieDesc) //questa aggiorna il valore dell'uri dei movie
        setUriTv(seriesDesc)//questa aggiorna il valore dell'uri delle serie     
    }, []);// al montaggio del componente

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