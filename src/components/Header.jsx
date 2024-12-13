import { Filter } from "./Filter/Filter";

export function Header(){
    

    return(
        <header className="bg-black">    
                <div className="d-flex justify-content-between space-pb-4 pt-4 ps-4 pe-4">
                    <div className="col-3">
                        <h1 className="text-danger">Boolflix</h1>
                    </div>

                    <Filter/>

                </div>
            
        </header>   
    )
}