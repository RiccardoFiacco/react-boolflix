export function Card({obj={}}){
    const {original_language, vote_average} = obj;
    return(
        <ol>{obj.title? obj.title : obj.name}
            <li>{obj.original_title ? obj.original_title : obj.original_name}</li>
            <li>{original_language}</li>
            <li>{vote_average}</li>
        </ol>
    )
}