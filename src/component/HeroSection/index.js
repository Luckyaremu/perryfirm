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
                <VideoBg autoPlay="autoplay" loop muted src={"https://res.cloudinary.com/aremucamp/video/upload/v1616663658/video.mp4"} />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    WELCOME TO TRENA GENERAL SERVICES
                </HeroH1>
                <HeroP>
                    A place where we make your goods clearing easy, efficient and affordable
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
