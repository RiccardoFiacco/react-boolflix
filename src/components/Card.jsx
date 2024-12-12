export function Card({obj={}}){
    const {original_language, vote_average} = obj;
    let img;
    function flag(original_language){
        switch(original_language){
            case "en" :
                return img= "https://flagpedia.net/data/flags/w580/gb.webp"      
            case "it":
                return img = "https://flagpedia.net/data/flags/w580/it.webp"    
            case "de":
                return img = "https://flagpedia.net/data/flags/w580/de.webp"    
            case "es":
                return img = "https://flagpedia.net/data/flags/w580/es.webp"   
            default: 
                return 
        }
    }
    
    return(
        <ol>{obj.title? obj.title : obj.name}
            <li>{obj.original_title ? obj.original_title : obj.original_name}</li>
            <li>{
                flag(original_language)? <img src={img} height="25px" alt=""/> : original_language
            }</li>
            <li>{vote_average}</li>
        </ol>
    )
}