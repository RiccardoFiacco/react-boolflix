import { List } from "../components/List";
import { Footer } from '../components/Footer/Footer';
import { useContext, useEffect} from "react";
import { GlobalContext } from "../utils/GlobalContext";
import { uriMovieBase } from "../utils/util";
import { Outlet } from "react-router-dom";
export function Film(){

    const { setUriMovie } = useContext(GlobalContext) //importo le variabili globali che mi servono

    useEffect(() => { //hook che al montaggio del componente
        setUriMovie(uriMovieBase) //imposta l'uri da cui prendere i film
    }, []);

    return(
        <div className="div bg-dark">
            <div className="container">
                <Outlet/>
                <List title={"Film"}/>
                <Footer/>
            </div>
        </div>
    )
}