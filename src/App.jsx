import { useState } from 'react';
import './App.css';
import { GlobalContext } from './GlobalContext.js';
import { axiosSetCall } from './util.js';

function App() {
  const [searchInput, setSearchInput] = useState('') //creo una variabile reattiva per andare a gestire il valore di input
  const uri_tv = "https://api.themoviedb.org/3/discover/tv?api_key=3a55960cb8d2cc735fc2a215dc42af3e&";
  const uri_movie = "https://api.themoviedb.org/3/discover/movie?api_key=3a55960cb8d2cc735fc2a215dc42af3e&";

  function changeHandler(event){ //funzione che viene eseguita al cambiamento del valore di input
    let value = event.target.value; //andiamo a dare ad una variabile il valore dell'elemento che ha scatenato l'evento
    setSearchInput(value); // aggiorno il valore della variabile reattiva
    console.log(value)
  }

  return (
    <GlobalContext.Provider value={{uri_movie, uri_tv}}>
      <h1>Boolflix</h1>
      <input type='text' onChange={(e) => changeHandler(e)} name="title" value={searchInput}></input>
    </GlobalContext.Provider>
  )
}

export default App
