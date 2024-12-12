import { axiosSetCall, changeHandler,searchFunction } from '../util.js';
import { useEffect, useState, useContext} from 'react';
import { GlobalContext } from '../GlobalContext.js';

export function Main(){

    const {uriTvBase, uriMovieBase, uriFilterMovieBase, uriFilterTvBase} = useContext(GlobalContext)

    const [uriTv, setUriTv] = useState(uriTvBase);
    const [uriMovie, setUriMovie] = useState(uriMovieBase);

    const [searchInput, setSearchInput] = useState('') //creo una variabile reattiva per andare a gestire il valore di input
    const [movies, setMovies] = useState([]) //creo una variabile reattiva per andare a salvare gli oggetti film
    const [tvSeries, setTvSeries] = useState([]) //creo una variabile reattiva per andare a salvare gli oggetti serie

    //const [movies2, refetchMovies2] = useMovies();

    useEffect(()=>{ //use effect che al montaggio del componente invoca queste due funzioni
      axiosSetCall(uriMovie, setMovies) //questa recupera e aggiorna la variabile movies
      axiosSetCall(uriTv, setTvSeries)//questa recupera e aggiorna la variabile tvSeries
    },[uriMovie, uriTv])//dipendenza al cambio dell' url

    function onSubmit(){
      const query = searchFunction(searchInput)
      setUriTv(uriFilterTvBase + query);
      setUriMovie(uriFilterMovieBase + query);
    }

    function reset(){
      setUriTv(uriTvBase);
      setUriMovie(uriMovieBase);
    }
    
    return(
        <main>
            {/* input che al change chiama una funzione che modifica il valore searchInput e con valore uguale a searchInput*/}
            <input type='text' onChange={(e) => changeHandler(e, setSearchInput)} name="title" value={searchInput}></input> 
            
            <button onClick={onSubmit}>invio</button>{/*button che al click esegue la funzione search function*/}
            <button onClick={reset}>reset</button>
                
            <h3>Film</h3>
            <div>{//map per creare dei paragrafi con i titoli dei film
            movies && movies.map((movie, i)=>{
                return(
                    <p key={i}>{movie.title}</p>
                )})  
            }</div>
        
            <h3>Serie tv</h3>
            <div>{//map per creare dei paragrafi con i titoli delle serie
            tvSeries && tvSeries.map((serie, i)=>{
                return(
                    <p key={i}>{serie.name}</p>
                )
            })  
            }</div>
        </main>
    )
}