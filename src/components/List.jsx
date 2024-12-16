import { GlobalContext } from "../utils/GlobalContext";
import { Card } from "./Card/Card";
import { useContext } from "react";

export function List({ title='' }){

    let {movies, tvSeries , myList, setMyList} = useContext(GlobalContext) 
    
    let list;
    if(title == "Film"){
      list = movies
    }
    if(title == "Serie Tv"){
     list = tvSeries 
     title="Serie_Tv"
    }
    if(title == "My List"){
      list = myList
      title="My_List"
    }

    function addFunction(e){ //aggiorna la variabile my list 
      setMyList([...myList, e])
    }

    return(
        <div className="row row-gap-3">
        <h2 className="pt-5 pb-3 text-light" >{title}</h2>
          {//map per creare dei paragrafi con i titoli delle serie
             list && list.map((serie, i) => {
                return (
                <div className="col-8 col-sm-6 col-md-4 col-lg-3" key={i} >
                  <Card obj={serie} objType = {title} addInList = {()=>addFunction(serie)} />
                </div>);
              })
          }  
      </div> 
    )
}