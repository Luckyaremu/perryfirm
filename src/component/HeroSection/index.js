import React, {useState} from 'react';
import {Button} from "../ButtonElement"
import {HeroContainer, HeroBg, VideoBg, HeroContent,
     HeroH1, HeroBtnWrapper, HeroP,
    ArrowForward, ArrowRight } from "./HeroElements";

const Hero = () => {
 const [hover, setHover] = useState(false)
 const onHover = () => {
     setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg src={"https://res.cloudinary.com/aremucamp/image/upload/v1619083141/industry-4688725_1920.jpg"} />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    WELCOME TO TRENA GENERAL SERVICES
                </HeroH1>
                <HeroP>
                    A place where we make your products clearing easy, efficient and affordable
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="services" onMouseEnter={onHover} onMouseLeave={onHover}>
                        Our Services {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
