import { Filter } from "./Filter/Filter";

export function Header(){
    

    return(
        <header className="bg-black">
            <div className="container">
                <div className="row pb-4 pt-4">
                    <div className="col">
                        <h1 className="text-danger">Boolflix</h1>
                    </div>

                    <Filter/>

                </div>
            </div>
        </header>   
    )
}