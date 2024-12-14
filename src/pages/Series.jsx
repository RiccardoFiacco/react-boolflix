import { List } from "../components/List";
import { Footer } from '../components/Footer/Footer';
import { useContext, useEffect} from "react";
import { GlobalContext } from "../utils/GlobalContext";
import { uriTvBase, axiosSetCall } from "../utils/util";

export function Series(){

    const {setTvSeries} = useContext(GlobalContext) 
    
    useEffect(() => {
        axiosSetCall(uriTvBase, setTvSeries); 
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