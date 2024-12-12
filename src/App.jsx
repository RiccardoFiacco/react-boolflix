import './App.css';
import { GlobalContext } from './GlobalContext.js';
import { Header } from './components/Header.jsx';
import { Main } from './components/Main.jsx';
import {uriTvBase, uriMovieBase, uriFilterMovieBase, uriFilterTvBase} from './util.js'

function App() {

  return (
    <GlobalContext.Provider value={{uriMovieBase, uriTvBase, uriFilterMovieBase, uriFilterTvBase}}>{/*usiamo un context per rendere globali a tutti i componenti quei valori*/}
        <Header/>
        <Main/>
    </GlobalContext.Provider>
  )
}

export default App
