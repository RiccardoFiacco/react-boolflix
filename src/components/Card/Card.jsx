import { flagImage, imagePath } from "../../utils/util.jsx";
import { getStar } from "../../utils/util.jsx";
import style from './Card.module.css'
import fotoPlace from '../../assets/elementor-placeholder-image.webp'
export function Card({ obj = {}, addInList }) {

  const { title, original_title, original_language, vote_average} = obj; //destructuring 

  let language = flagImage(original_language); //prende l'immagine della bandiera

  let star = getStar(vote_average); //genera le stelle della valutazione
  let finalImg = imagePath + obj.poster_path; //setta l'url per recuperare l'immagine

 return (
    <div className="card relative">

        <img src={obj.poster_path ? finalImg : fotoPlace} className="myCard"/>
        
        <div className="hidden">
          <h3>{title}</h3>
          <ol>
            <li>original name: {original_title}</li>
            <li>
              language: 
               {language ?  <img src={language} className={style.h_flag}/> : original_language}
            </li>
            <li>avarage vote: {star}</li>
          </ol>
          <button className="btn btn-outline-primary" onClick={addInList}>add in your List</button>
        </div>
      
    </div>
  );
}
