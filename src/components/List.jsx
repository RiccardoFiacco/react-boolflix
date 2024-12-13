import { GlobalContext } from "../GlobalContext";
import { Card } from "./Card/Card";
import { useContext } from "react";

export function List({ title=''}){

    let {movies, tvSeries} = useContext(GlobalContext) 
    
    let list;
    title == "Film" ? list = movies: list = tvSeries

    return(
        <div className="row row-gap-3">
        <h2 className="pt-5 pb-3" >{title}</h2>
          {//map per creare dei paragrafi con i titoli delle serie
             list && list.map((serie, i) => {
                return (
                <div className="col-8 col-sm-6 col-md-4 col-lg-3" key={i} >
                  <Card obj={serie} />
                </div>);
              })
          }  
      </div> 
    )
}