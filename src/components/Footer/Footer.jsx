import { useContext } from 'react';
import { GlobalContext } from '../../utils/GlobalContext';
import { uriTvBase, uriMovieBase } from '../../utils/util';
import style from './Footer.module.css'
export function Footer(){
    let {setUriMovie, setUriTv} = useContext(GlobalContext) 
    let choseButtonArr = [1,2,3,4,5,6,7,8,9,10]

    function changePage(page){
        let currentTvPage = uriTvBase + "&page=" + page
        let currentMoviePage = uriMovieBase + "&page=" + page
        setUriTv(currentTvPage)
        setUriMovie(currentMoviePage)
    }

    return(
        <div className="bg-dark">
            <div className="container">
                <div className="row pt-4 pb-4">
                    {choseButtonArr.map((number, i)=>{
                        return(
                            <div className="col" key={i}> 
                                <button className={style.myBtn} onClick={()=>changePage(number)}>
                                    {number}
                                </button>
                            </div> 
                        )
                    })} 
                </div>
            </div> 
        </div>
    )
}