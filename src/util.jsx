import axios from "axios";
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { faStar as starRegular } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const uriTvBase = "https://api.themoviedb.org/3/discover/tv?api_key=3a55960cb8d2cc735fc2a215dc42af3e";
export const uriMovieBase = "https://api.themoviedb.org/3/discover/movie?api_key=3a55960cb8d2cc735fc2a215dc42af3e";
export const uriFilterMovieBase = "https://api.themoviedb.org/3/search/movie?api_key=3a55960cb8d2cc735fc2a215dc42af3e";
export const uriFilterTvBase = "https://api.themoviedb.org/3/search/tv?api_key=3a55960cb8d2cc735fc2a215dc42af3e";
export const imagePath = "https://image.tmdb.org/t/p/w342"

export function axiosSetCall(uri, setterValue) {
    axios
      .get(uri)
      .then((res) => {
        const mappedCatalogue = res.data.results.map((element)=>{
            return{
                ...element,
                title : element.name ?? element.title,
                original_title : element.original_name?? element.original_title
            }
        })
        setterValue(mappedCatalogue)
      })
      .catch((err) => {
        setterValue(err);
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

export function flagImage(original_language){
    let img;
    switch(original_language){
        case "en" :
            img= "https://flagpedia.net/data/flags/w580/gb.webp"      
            break;
        case "it":
            img = "https://flagpedia.net/data/flags/w580/it.webp"    
            break;
        case "de":
            img = "https://flagpedia.net/data/flags/w580/de.webp"    
            break;
        case "es":
            img = "https://flagpedia.net/data/flags/w580/es.webp"   
            break;
        default:
            break; 
    }
    return img
}

export function getStar(vote){
    let app = Math.ceil(vote/2);
    let arr = [];
    
    for(let i=0; i < app; i++){
        arr.push(<FontAwesomeIcon icon={faStar}/>)    
    }

    for(let i=0; i < 5-app; i++){
        arr.push(<FontAwesomeIcon icon={starRegular} />)     
    }
    
    return arr
}