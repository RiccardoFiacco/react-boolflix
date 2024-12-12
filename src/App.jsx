import { useEffect, useState } from 'react';
import './App.css';
import { GlobalContext } from './GlobalContext.js';
import { axiosSetCall, changeHandler } from './util.js';

function App() {
  
  const uri_tv = "https://api.themoviedb.org/3/discover/tv?api_key=3a55960cb8d2cc735fc2a215dc42af3e&";
  const uri_movie = "https://api.themoviedb.org/3/discover/movie?api_key=3a55960cb8d2cc735fc2a215dc42af3e&";
  const [searchInput, setSearchInput] = useState('') //creo una variabile reattiva per andare a gestire il valore di input
  

  function searchFunction(){
    console.log("input immesso "+ searchInput)
  }

  return (
    <GlobalContext.Provider value={{uri_movie, uri_tv}}>
      <h1>Boolflix</h1>
      <input type='text' onChange={(e) => changeHandler(e, setSearchInput)} name="title" value={searchInput}></input>
      <button onClick={()=>searchFunction()}>invio</button>
    </GlobalContext.Provider>
  )
}

export default App
