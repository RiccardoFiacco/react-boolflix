import { useEffect, useState } from 'react';
import './App.css';
import { GlobalContext } from './GlobalContext.js';
import { axiosSetCall, changeHandler,searchFunction } from './util.js';

function App() {
  
  const uri_tv = "https://api.themoviedb.org/3/discover/tv?api_key=3a55960cb8d2cc735fc2a215dc42af3e&";
  const uri_movie = "https://api.themoviedb.org/3/discover/movie?api_key=3a55960cb8d2cc735fc2a215dc42af3e&";

  const [searchInput, setSearchInput] = useState('') //creo una variabile reattiva per andare a gestire il valore di input
  const [movies, setMovies] = useState([]) //creo una variabile reattiva per andare a salvare gli oggetti film
  const [tvSeries, setTvSeries] = useState([]) //creo una variabile reattiva per andare a salvare gli oggetti serie

  useEffect(()=>{ //use effect che al montaggio del componente invoca queste due funzioni
    axiosSetCall(uri_movie, setMovies) //questa recupera e aggiorna la variabile movies
    axiosSetCall(uri_tv, setTvSeries)//questa recupera e aggiorna la variabile tvSeries
  },[])//dipendenza solo all'avvio


  return (
    <GlobalContext.Provider value={{uri_movie, uri_tv}}>{/*usiamo un context per rendere globali a tutti i componenti quei valori*/}
      <header>
        <h1>Boolflix</h1>
        <input type='text' onChange={(e) => changeHandler(e, setSearchInput)} name="title" value={searchInput}></input> 
        {/* input che al change chiama una funzione che modifica il valore searchInput e con valore uguale a searchInput*/}
        <button onClick={()=>searchFunction(searchInput)}>invio</button>
        {/*button che al click esegue la funzione search function*/}
      </header>
      <main>
        <h3>Film</h3>
        <div>{//map per creare dei paragrafi con i titoli dei film
          movies.map((movie, i)=>{
            return(
              <p key={i}>{movie.title}</p>
            )
          })  
        }</div>
        <h3>Serie tv</h3>
        <div>{//map per creare dei paragrafi con i titoli delle serie
          tvSeries.map((serie, i)=>{
            return(
              <p key={i}>{serie.name}</p>
            )
          })  
        }</div>
      </main>
    </GlobalContext.Provider>
  )
}

export default App
