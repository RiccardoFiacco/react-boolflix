import {  useContext } from "react";
import { GlobalContext } from "../GlobalContext.js";
import { Card } from "./Card.jsx";

export function Main() {

  let {movies, tvSeries} = useContext(GlobalContext) 
  return (
    <main className="container">
      <div className="row">
        <h2>Film</h2>
        {//map per creare dei paragrafi con i titoli dei film
            movies && movies.map((movie, i) => {
                return (
                  <div className="col"key={i} >
                    <Card obj={movie} />
                  </div>)   
              })
        }  
      </div>

      <div className="row">
        <h2>Serie tv</h2>
          {//map per creare dei paragrafi con i titoli delle serie
            tvSeries && tvSeries.map((serie, i) => {
                return (
                <div className="col"key={i} >
                  <Card obj={serie} />
                </div>);
              })
          }  
      </div> 
    </main>
  );
}
