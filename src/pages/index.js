import React, {useState} from 'react';

import Sidebar from "../component/Sidebar";
import HeroSection from "../component/HeroSection";
import InfoSection from "../component/InfoSection";
import { homeObjOne, homeObjThree } from '../component/InfoSection/Data';
import Services from '../component/Services';
import Footer from "../component/Footer";
const Home = () => {
    const [ isOpen, setIsOpen ] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
           
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <Services />
            <InfoSection {...homeObjThree} />
            <Footer />
        </>
    )
}

export default Home
