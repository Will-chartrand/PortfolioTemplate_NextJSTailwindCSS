import { Inter } from 'next/font/google';

import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import About from './main/About';
import Contact from './main/Contact';
import Pricing from './main/Pricing';
import Services from './main/Services';


const inter = Inter({ subsets: ['latin'] })

function Main(){
    return (
        <>
            <div></div>
            <About/>
            <Services/>
            <Pricing/>
            <Contact/>
        </>
    )
}

export default Main;