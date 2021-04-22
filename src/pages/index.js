import React, {useState} from 'react';
import Navbar from '../component/Navbar';
import Sidebar from "../component/Sidebar";
import HeroSection from "../component/HeroSection";
import InfoSection from "../component/InfoSection";
import { homeObjOne, homeObjThree } from '../component/InfoSection/Data';
import Services from '../component/Services';
import Textscroll from "../component/Textscroll";

const Home = () => {
    const [ isOpen, setIsOpen ] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <Textscroll />
        
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <Services />
            <InfoSection {...homeObjThree}/>
        </>
    )
}

export default Home
