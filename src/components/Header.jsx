import { useContext, useState } from "react";
import { GlobalContext } from "../GlobalContext";
import { uriFilterMovieBase, uriFilterTvBase, searchFunction, uriTvBase, uriMovieBase } from "../util";


export function Header(){
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
        <header>
            <div className="row pt-4 pb-4">
                <div className="col">
                    <h1>Boolflix</h1>
                </div>

                <div className="col">
                    {/* input che al change chiama una funzione che modifica il valore searchInput e con valore uguale a searchInput*/}
                    <input 
                     type="text" 
                     onChange={(e) => changeHandler(e, setSearchInput)} 
                     name="title" 
                     value={searchInput} 
                     className=""
                     ></input>
                    {/*button che al click esegue la funzione search function e l'altra resetta tutto*/}
                    {/*<button onClick={onSubmit}>invio</button>*/}
                    <button 
                     onClick={reset}
                     className="btn btn-danger ms-3">reset</button>
                </div>
            </div>
        </header>   
    )
}