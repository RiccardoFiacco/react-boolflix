import { Filter } from "./Filter/Filter";

export function Header(){
    

    return(
        <header className="bg-black">    
                <div className="d-flex justify-content-between pb-3 pt-3 ps-4">
                    <div className="col-3">
                        <h1 className="text-danger">Boolflix</h1>
                    </div>

                    <Filter/>

                </div>
            
        </header>   
    )
}