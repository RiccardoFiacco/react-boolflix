import { useState, useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import { uriFilterMovieBase, uriFilterTvBase, searchFunction, uriTvBase, uriMovieBase } from "../../util.jsx";
import  style  from './Filter.module.css'

export function Filter(){
    let {setUriMovie, setUriTv} = useContext(GlobalContext) 
    
    const [searchInput, setSearchInput] = useState("");
    
    function changeHandler(event, callback){ //funzione che viene eseguita al cambiamento del valore di input
        let value = event.target.value; //andiamo a dare ad una variabile il valore dell'elemento che ha scatenato l'evento
        callback(value); // aggiorno il valore della variabile reattiva
        const query = searchFunction(searchInput);
        setUriTv(uriFilterTvBase + query);
        setUriMovie(uriFilterMovieBase + query);
    }
    function reset() {
        setUriTv(uriTvBase);
        setUriMovie(uriMovieBase);
    }

    return(
        <div className="row">
            {/* input che al change chiama una funzione che modifica il valore searchInput e con valore uguale a searchInput*/}
            <div className="col">
                <input 
                    type="text" 
                    onChange={(e) => changeHandler(e, setSearchInput)} 
                    name="title" 
                    value={searchInput} 
                    className={style.input}
                ></input>
            </div>
                {/*button che al click esegue la funzione search function e l'altra resetta tutto*/}
                {/*<button onClick={onSubmit}>invio</button>*/}
            <div className="col">
                <button 
                    onClick={reset}
                    className="btn btn-danger ms-3">reset
                </button>
            </div>
        </div>
    )
}