import { axiosSetCall, searchFunction } from "../util.js";
import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../GlobalContext.js";
import { Card } from "./Card.jsx";
import useMovies from "../hooks/useMovies.jsx";
export function Main() {
  const { uriTvBase, uriMovieBase, uriFilterMovieBase, uriFilterTvBase } =useContext(GlobalContext);

  const [uriTv, setUriTv] = useState(uriTvBase);
  const [uriMovie, setUriMovie] = useState(uriMovieBase);

  const [searchInput, setSearchInput] = useState(""); //creo una variabile reattiva per andare a gestire il valore di input
  const [movies, setMovies] = useState([]); //creo una variabile reattiva per andare a salvare gli oggetti film
  const [tvSeries, setTvSeries] = useState([]); //creo una variabile reattiva per andare a salvare gli oggetti serie

//   const [movies2, searchMovie2] = useMovies();
    
  useEffect(() => {
    //use effect che al montaggio del componente invoca queste due funzioni
    axiosSetCall(uriMovie, setMovies); //questa recupera e aggiorna la variabile movies
    axiosSetCall(uriTv, setTvSeries); //questa recupera e aggiorna la variabile tvSeries
    
  }, [uriMovie, uriTv]); //dipendenza al cambio dell' url

  // function onSubmit() {
  //   const query = searchFunction(searchInput);
  //   setUriTv(uriFilterTvBase + query);
  //   setUriMovie(uriFilterMovieBase + query);
  // }

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

  return (
    <main className="container">
      <div className="row">
        <div className="col">
          {/* input che al change chiama una funzione che modifica il valore searchInput e con valore uguale a searchInput*/}
          <input type="text" onChange={(e) => changeHandler(e, setSearchInput)} name="title" value={searchInput} ></input>
          {/*button che al click esegue la funzione search function e l'altra resetta tutto*/}
          {/*<button onClick={onSubmit}>invio</button>*/}
          <button onClick={reset}>reset</button>
        </div>
      </div>
      
            {/* <h3>prova fetch</h3>
            <div>{movies2.map((movie, i) => {
              return <p key={i}> {movie.title}</p>;
            })}</div> */}
      <div className="row">
        <h2>Film</h2>
        {//map per creare dei paragrafi con i titoli dei film
            movies && movies.map((movie, i) => {
                return (
                  <div className="col"key={i} >
                    <Card obj={movie} />
                  </div>)   
              })
        }  
      </div>

      <div className="row">
        <h2>Serie tv</h2>
          {//map per creare dei paragrafi con i titoli delle serie
            tvSeries && tvSeries.map((serie, i) => {
                return (
                <div className="col"key={i} >
                  <Card obj={serie} />
                </div>);
              })
          }  
      </div> 
    </main>
  );
}
