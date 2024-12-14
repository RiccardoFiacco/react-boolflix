import { List } from "../components/List";
import { Footer } from '../components/Footer/Footer'
export function Series(){
    return(
        <div className="div bg-dark">
            <div className="container">
                <List title={"Serie tv"}/>
                <Footer/>
            </div>
        </div>
    )
}