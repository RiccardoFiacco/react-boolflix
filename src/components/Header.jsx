import { Filter } from "./Filter/Filter";
import { Navigation } from "./Navigation";
export function Header(){

    return(
        <header className="bg-black">    
                <div className="row justify-content-between pb-3 pt-3 ps-4">
                    <div className="col">
                        <div className="nav text-center">
                            <Navigation/>
                        </div>
                    </div>
                    <div className="col-3">
                        <Filter/>
                    </div>
                </div>
            
        </header>   
    )
}