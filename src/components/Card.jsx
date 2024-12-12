export function Card({ogg={}}){
    console.log(ogg)
    return(
        <ol>{ogg.title? ogg.title : ogg.name}
            <li>{ogg.original_title ? ogg.original_title : ogg.original_name}</li>
            <li>{ogg.original_language}</li>
            <li>{ogg.vote_average}</li>
        </ol>
    )
}