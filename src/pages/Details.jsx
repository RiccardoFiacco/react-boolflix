import { useContext } from "react";
import { GlobalContext } from "../utils/GlobalContext";
import { getStar, imagePath } from "../utils/util";
import fotoPlace from '../assets/elementor-placeholder-image.webp'
export function Details(){
    //mi serve recuperare movie o tv x chiamata
    const { elementInfo } = useContext(GlobalContext)
    const {title, original_title, original_language, vote_average,overview, adult, poster_path} = elementInfo
    let star = getStar(vote_average);
    let finalImg = imagePath + poster_path;
    
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