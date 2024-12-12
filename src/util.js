import axios from "axios";

export const uriTvBase = "https://api.themoviedb.org/3/discover/tv?api_key=3a55960cb8d2cc735fc2a215dc42af3e";
export const uriMovieBase = "https://api.themoviedb.org/3/discover/movie?api_key=3a55960cb8d2cc735fc2a215dc42af3e";
export const uriFilterMovieBase = "https://api.themoviedb.org/3/search/movie?api_key=3a55960cb8d2cc735fc2a215dc42af3e";
export const uriFilterTvBase = "https://api.themoviedb.org/3/search/tv?api_key=3a55960cb8d2cc735fc2a215dc42af3e";

export function axiosSetCall(uri, callback) {
    axios
      .get(uri)
      .then((res) => {
        callback(res.data.results)
      })
      .catch((err) => {
        callback(err);
      });
}

export function changeHandler(event, callback){ //funzione che viene eseguita al cambiamento del valore di input
    let value = event.target.value; //andiamo a dare ad una variabile il valore dell'elemento che ha scatenato l'evento
    callback(value); // aggiorno il valore della variabile reattiva
}

export  function searchFunction(string){ //funzione per ricercare serie o film per nome
    let query = "&query=";
    const stringToSearch = query + string.trim().split(' ').join('+')
    return stringToSearch  
}