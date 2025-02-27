import './App.css';
import { GlobalContext } from './utils/GlobalContext.js';
import { useEffect, useState } from 'react';
import {uriTvBase, uriMovieBase, axiosSetCall} from './utils/util.jsx'
import { HashRouter,BrowserRouter, Route, Routes } from 'react-router-dom';
import { DefaultPage } from './pages/DefaultPage.jsx';
import { Home } from './pages/Home.jsx';
import { Series } from './pages/Series.jsx';
import { Film } from './pages/Film.jsx';
import { HighestRated } from './pages/HighestRated.jsx';
import { RecentlyAdd } from './pages/RecentlyAdd.jsx';
import { MyList } from './pages/MyList.jsx';
import {Details} from './pages/Details.jsx';

function App() {
  const [uriTv, setUriTv] = useState(uriTvBase);
  const [uriMovie, setUriMovie] = useState(uriMovieBase);
  const [movies, setMovies] = useState([]); //creo una variabile reattiva per andare a salvare gli oggetti film
  const [tvSeries, setTvSeries] = useState([]); //creo una variabile reattiva per andare a salvare gli oggetti serie
  const [myList, setMyList] = useState([]);
  
  useEffect(() => {//use effect che al montaggio del componente invoca queste due funzioni
    axiosSetCall(uriMovie, setMovies); //questa recupera e aggiorna la variabile movies
    axiosSetCall(uriTv, setTvSeries); //questa recupera e aggiorna la variabile tvSeries  
  }, [uriMovie, uriTv]);//dipendenze al cambiamento degli uri

  return (
    <GlobalContext.Provider value={{
      uriTv, setUriTv, 
      uriMovie, setUriMovie, 
      movies, setMovies, 
      tvSeries, setTvSeries,
      myList, setMyList
    }}>{/*usiamo un context per rendere globali a tutti i componenti quei valori*/}
      <BrowserRouter basename="/react-boolflix">
        <Routes>
          <Route Component={DefaultPage}>
            <Route path="/" Component={Home}/>
             <Route path='/Series' Component={Series}/>
             <Route path='/Film' Component={Film}/>              
             <Route path='/Highest-rated' Component={HighestRated}/>              
             <Route path='/Recently-add' Component={RecentlyAdd}/> 
             <Route path='/MyList' Component={MyList}/>  
              <Route path="/:type/:id" Component={Details}/>
          </Route> 
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  )
}

export default App
