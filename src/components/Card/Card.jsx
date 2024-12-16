import { flagImage, imagePath, getStar } from "../../utils/util.jsx";
import style from './Card.module.css'
import fotoPlace from '../../assets/elementor-placeholder-image.webp'
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../utils/GlobalContext.js";

export function Card({ obj = {}, addInList }) {

  const { setElementInfo } = useContext(GlobalContext)
  
  const { title, original_title, original_language, vote_average, id} = obj; //destructuring 

  let language = flagImage(original_language); //prende l'immagine della bandiera

  let star = getStar(vote_average); //genera le stelle della valutazione
  let finalImg = imagePath + obj.poster_path; //setta l'url per recuperare l'immagine
  
  
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
         
          <button className="btn btn-outline-primary" onClick={addInList}>add in your List</button>
          <button onClick={()=>setElementInfo(obj)}><NavLink to={`/:/${id}`} state={{el:obj}}>Dettagli</NavLink></button>
        </div>  
    </div>
    
  );
}
