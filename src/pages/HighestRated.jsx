import { List } from "../components/List";
import { Footer } from '../components/Footer/Footer'
import { useContext, useEffect } from "react";
import { GlobalContext } from "../utils/GlobalContext";
import { Outlet } from "react-router-dom";

export function HighestRated(){
    const { setUriTv, setUriMovie } = useContext(GlobalContext)  //importo le variabili globali
    let movieTop ="https://api.themoviedb.org/3/movie/top_rated?&api_key=3a55960cb8d2cc735fc2a215dc42af3e"; //creo l'url da cui recuperare i film con valutazione maggiore
    let seriesTop =  "https://api.themoviedb.org/3/tv/top_rated?&api_key=3a55960cb8d2cc735fc2a215dc42af3e"; //creo l'url da cui recuperare le serie con valutazione maggiore
   

    useEffect(() => {//use effect che al montaggio del componente invoca queste 4 funzioni   
        setUriMovie(movieTop) //questa aggiorna il valore dell'uri dei movie
        setUriTv(seriesTop)//questa aggiorna il valore dell'uri delle serie     
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