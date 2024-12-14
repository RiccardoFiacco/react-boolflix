import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer/Footer';
export function DefaultPage(){
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>   
    )
}