import { flagImage } from "../util";

export function Card({obj={}}){

    const {original_language, vote_average} = obj;
    let img = flagImage(original_language);
    
    return(
        <ol>
            {obj.title ?? obj.name ?? 'Titolo Assente'}
            <li>{obj.original_title ?? obj.original_name}</li>
            <li>{
                img ? <img src={img} height="25px" alt=""/> : original_language
            }</li>
            <li>{vote_average}</li>
        </ol>
    )
}