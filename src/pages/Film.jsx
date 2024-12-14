import { List } from "../components/List";
import { Footer } from '../components/Footer/Footer';
import { useContext, useEffect} from "react";
import { GlobalContext } from "../utils/GlobalContext";
import { uriMovieBase, axiosSetCall } from "../utils/util";

export function Film(){

    const {setMovies} = useContext(GlobalContext) 

    useEffect(() => {
        axiosSetCall(uriMovieBase, setMovies); 
    }, []);


    return(
        <div className="div bg-dark">
            <div className="container">
                <List title={"Film"}/>
                <Footer/>
            </div>
        </div>
    )
}