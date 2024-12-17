import {  useEffect, useState } from "react";
import { getStar, imagePath } from "../utils/util";
import fotoPlace from '../assets/elementor-placeholder-image.webp'
import axios from "axios";
import { useParams } from "react-router-dom";

export function Details(){
    let {id, type} = useParams() //recupero parametri dell'uri
    let typeOfObj;
    type == 'Serie_Tv'? typeOfObj = 'tv' : typeOfObj = 'movie';

    const [cast, setCast] = useState([]) //creo la variabile di stato che servira per mettere gli attori
    const [content, setContent] = useState({})
    const { title, original_title, original_language, vote_average,overview, adult, poster_path, genres} = content;
   
    let star = getStar(vote_average); //recupero le stelle
    let finalImg = imagePath + poster_path; //recupero l'immagine

    useEffect(()=>{
        axios
        .get(`https://api.themoviedb.org/3/${typeOfObj}/${id}?&api_key=3a55960cb8d2cc735fc2a215dc42af3e`)
        .then((res)=>{
            setContent(res.data) 
        })
        .catch((err)=>console.log(err))
    },[])

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
    actors = app.map(actor => ({ //li mappo e prendo solo nome e personaggi interpretati restituendoli come oggetto
        name: actor.name,
        character: actor.character,
    }));
      
    return(
        content && 
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
                        <div>
                            <p>Generi:  
                            {genres && genres.map((genre,i)=>{
                                    return(
                                        <span key={i}> {genre.name}</span> 
                                    )
                                })
                            }
                            </p>
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