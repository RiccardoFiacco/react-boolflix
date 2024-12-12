import { flagImage } from "../util";

export function Card({obj={}}){

    const {original_language, vote_average} = obj;
    let language = flagImage(original_language);
    
    return(
        <>
        <div>{obj.title ?? obj.name ?? 'Titolo Assente'}</div>
        <ol>    
            <li>original name: {obj.original_title ?? obj.original_name}</li>
            <li>language: {
                language ? <img src={language} height="25px" alt=""/> : original_language
            }</li>
            <li>avarage vote: {vote_average}</li>
        </ol>
        </>
    )
}