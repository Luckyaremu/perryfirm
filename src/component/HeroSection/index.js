import React, {useState} from 'react';
import Video from "../../videos/video.mp4";
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
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    WELCOME TO TRENA GENEREAL SERVICES
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
