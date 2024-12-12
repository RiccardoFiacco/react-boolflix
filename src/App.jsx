import './App.css';
import { GlobalContext } from './GlobalContext.js';
import { axiosCall } from './util.js';

function App() {

  const uri_tv = "https://api.themoviedb.org/3/discover/tv?api_key=3a55960cb8d2cc735fc2a215dc42af3e&";
  const uri_movie = "https://api.themoviedb.org/3/discover/movie?api_key=3a55960cb8d2cc735fc2a215dc42af3e&";

  return (
    <GlobalContext.Provider value={{uri_movie, uri_tv}}>
      <h1>Boolflix</h1>
    </GlobalContext.Provider>
  )
}

export default App
