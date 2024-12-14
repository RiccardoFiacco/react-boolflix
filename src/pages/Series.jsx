import { List } from "../components/List";
import { Footer } from '../components/Footer/Footer';
import { useContext, useEffect} from "react";
import { GlobalContext } from "../utils/GlobalContext";
import { uriTvBase } from "../utils/util"; 

export function Series(){

    const {setUriTv} = useContext(GlobalContext) //importo le var cglobali che mi servono 
    
    useEffect(() => { //hook che al montaggio del componente
        setUriTv(uriTvBase) //imposta uri da cui recuperare le serie
    }, []);

    return(
        <div className="div bg-dark">
            <div className="container">
                <List title={"Serie tv"}/>
                <Footer/>
            </div>
        </div>
    )
}