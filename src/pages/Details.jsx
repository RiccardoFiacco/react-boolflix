import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../utils/GlobalContext";
import { getStar, imagePath } from "../utils/util";
import fotoPlace from '../assets/elementor-placeholder-image.webp'
import axios from "axios";

export function Details(){
    //mi serve recuperare movie o tv x chiamata
    const { elementInfo } = useContext(GlobalContext)
    const {title, original_title, original_language, vote_average,overview, adult, poster_path, id, typeOfObj} = elementInfo
    
    let star = getStar(vote_average); //recupero le stelle

    let finalImg = imagePath + poster_path; //recupero l'immagine

    const [cast, setCast] = useState([]) //creo la variabile di stato che servira per mettere gli attori

    let type;
    console.log(typeOfObj)
    typeOfObj == 'Serie_Tv'? type = 'tv' : type = 'movie';

    useEffect(()=>{
        axios
        .get(`https://api.themoviedb.org/3/${type}/${id}/credits?&api_key=3a55960cb8d2cc735fc2a215dc42af3e`)
        .then((res)=>{
          setCast(res.data.cast)   
        })
        .catch((err)=>console.log(err))
    },[])
    
      let actors
      let app = cast.slice(0, 5) //prendo i primi 5
      actors = app.map(actor => ({ //li mappo e prendo solo nome e personaggi interpretati
          name: actor.name,
          character: actor.character,
      }));
      
    return(
        <div className="bg-dark">
            <div className="container text-light">
                <div className="row">
                    <h1>{title}</h1>
                </div>
                <div className="row pb-5">
                    <div className="col">
                        <h4>titolo originale: {original_title}</h4>
                        <p>{overview}</p>
                        <p>per adulti? {adult? 'Si' : 'No'}</p>
                        <p>voto medio: {star}</p>
                        <p>paese: {original_language}</p>
                        <div>
                            {actors.map(({name, character}, i)=>{
                                return(
                                <p key={i}><strong>{name}</strong> interpreta: {character}</p>
                                )
                            })} 
                        </div>
                    </div>
                    <div className="col">
                        <img src={poster_path ? finalImg : fotoPlace} className="myCard"/>
                    </div>
                </div>
            </div>
        </div>
    )
}