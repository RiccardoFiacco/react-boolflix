import './App.css';
import { GlobalContext } from './GlobalContext.js';
import { Header } from './components/Header.jsx';
import { Main } from './components/Main.jsx';
import { useEffect, useState } from 'react';
import {uriTvBase, uriMovieBase, axiosSetCall} from './util.js'


function App() {
  const [uriTv, setUriTv] = useState(uriTvBase);
  const [uriMovie, setUriMovie] = useState(uriMovieBase);
  const [movies, setMovies] = useState([]); //creo una variabile reattiva per andare a salvare gli oggetti film
  const [tvSeries, setTvSeries] = useState([]); //creo una variabile reattiva per andare a salvare gli oggetti serie
  
  useEffect(() => {//use effect che al montaggio del componente invoca queste due funzioni
    axiosSetCall(uriMovie, setMovies); //questa recupera e aggiorna la variabile movies
    axiosSetCall(uriTv, setTvSeries); //questa recupera e aggiorna la variabile tvSeries    
  }, [uriMovie, uriTv]);//dipendenze al cambiamento degli uri

  return (
    <GlobalContext.Provider value={{
      uriTv, setUriTv, 
      uriMovie, setUriMovie, 
      movies, setMovies, 
      tvSeries, setTvSeries
    }}>{/*usiamo un context per rendere globali a tutti i componenti quei valori*/}
        <Header/>
        <Main/>
    </GlobalContext.Provider>
  )
}

export default App
