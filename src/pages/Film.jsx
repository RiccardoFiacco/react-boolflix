import { List } from "../components/List";
import { Footer } from '../components/Footer/Footer'
export function Film(){
    return(
        <div className="div bg-dark">
            <div className="container">
                <List title={"Film"}/>
                <Footer/>
            </div>
        </div>
    )
}