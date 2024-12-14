import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';

export function DefaultPage(){
    return(
        <div>
            <Header/>
            <Outlet/>
        </div>   
    )
}