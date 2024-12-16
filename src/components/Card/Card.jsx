import { flagImage, imagePath, getStar, axiosSetCall } from "../../utils/util.jsx";
import style from './Card.module.css'
import fotoPlace from '../../assets/elementor-placeholder-image.webp'
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../utils/GlobalContext.js";
import axios from "axios";

export function Card({ obj = {}, objType, addInList }) {

  const { setElementInfo } = useContext(GlobalContext)
  
  const { title, original_title, original_language, vote_average, id} = obj; //destructuring 

  let language = flagImage(original_language); //prende l'immagine della bandiera
  let type;

  let star = getStar(vote_average); //genera le stelle della valutazione
  let finalImg = imagePath + obj.poster_path; //setta l'url per recuperare l'immagine

  const [cast, setCast] = useState([])

  objType == 'Serie Tv'? type = 'tv' : type = 'movie';
  
  useEffect(()=>{
    axios
    .get(`https://api.themoviedb.org/3/${type}/${id}/credits?&api_key=3a55960cb8d2cc735fc2a215dc42af3e`)
    .then((res)=>{
      console.log(res.data.cast)
      setCast(res.data.cast)   
    })
    .catch((err)=>console.log(err))
  },[])

   console.log(cast)
  let actors
  let app = cast.slice(0, 5)
    if(Array.isArray(app) ){
    actors = app.map(actor => ({
      name: actor.name,
      character: actor.character,
    }));
  }

 return (
    <div className="card relative">

        <img src={obj.poster_path ? finalImg : fotoPlace} className="myCard"/>
        
        <div className="hidden">
          <h3>{title}</h3>
         
            <p>original name: {original_title}</p>
            <p>
              language: 
               {language ?  <img src={language} className={style.h_flag}/> : original_language}
            </p>
            <p>avarage vote: {star}</p>
            <div>
               {actors.map(({name, character}, i)=>{
                return(
                  <p key={i}>{name} interpreta {character}</p>
                )
              })} 
            </div>
          <button className="btn btn-outline-primary" onClick={addInList}>add in your List</button>
          <button onClick={()=>setElementInfo(obj)}><NavLink to={`/${objType}/${id}`} state={{el:obj}}>Dettagli</NavLink></button>
        </div>  
    </div>
    
  );
}
