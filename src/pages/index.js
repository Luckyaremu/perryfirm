import React, {useState} from 'react'
import Navbar from '../component/Navbar';
import Sidebar from "../component/Sidebar";
import HeroSection from "../component/HeroSection";

const Home = () => {
    const [ isOpen, setIsOpen ] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <HeroSection />
        </>
    )
}

export default Home
