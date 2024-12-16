import { useLocation } from "react-router-dom";
import { getStar, imagePath } from "../utils/util";
import fotoPlace from '../assets/elementor-placeholder-image.webp'
export function Details(){
    //mi serve recuperare movie o tv x chiamata
    let location = useLocation();
    const {title, original_title, original_language, vote_average,overview, adult, poster_path} = location.state.el
    let star = getStar(vote_average);
    let finalImg = imagePath + poster_path;
    console.log(location.state)
   
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
                    </div>
                    <div className="col">
                        <img src={poster_path ? finalImg : fotoPlace} className="myCard"/>
                    </div>
                </div>
            </div>
        </div>
    )
}