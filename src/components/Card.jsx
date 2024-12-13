import { flagImage, imagePath } from "../util.jsx";
import { getStar } from "../util.jsx";

export function Card({obj={}}){

    const {original_language, vote_average} = obj;
    let language = flagImage(original_language);

    let star = getStar(vote_average);
    let finalimag = imagePath+obj.poster_path
    return(
        <div style={{backgroundImage:`url(${finalimag})`}} className="myCard">
            <div className="hidden">
                <h3>{obj.title}</h3>
                {/* </div><img src={imagePath+obj.poster_path} alt="" /> */}
                <ol>    
                    <li>original name: {obj.original_title}</li>
                    <li>language: {
                        language ? <img src={language} height="25px" alt=""/> : original_language
                    }</li>
                    <li>avarage vote: {star}</li> 
                </ol>
            </div>
        </div>
    )
}