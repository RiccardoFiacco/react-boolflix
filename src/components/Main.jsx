import {  useContext } from "react";
import { GlobalContext } from "../GlobalContext.js";
import { Card } from "./Card/Card.jsx";
import { List } from "./List.jsx";
export function Main() {

  let {movies, tvSeries} = useContext(GlobalContext) 
  
  return (
    <main className="container">
      <List title={"Film"}/> 
      <List  title={"Serie tv"}/>
    </main>
  );
}
