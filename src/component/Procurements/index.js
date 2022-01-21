import React from 'react';
import { ServicesContainer, ServicesWrapper, ServicesH1, ServicesCard, ServicesP, NavBtn, NavBtnLink} from "./HeroElements.js";

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1> we also deals on </ServicesH1>
            <ServicesWrapper>
                <ServicesCard>    
                    <ServicesP>Supply of safety and protetion equipment.</ServicesP>
                    <ServicesP>Supply of motor pumps and breaks.</ServicesP>
                    <ServicesP>Supply of communications equipments and accessories such as rounters, moderms, hubs, cables etc.</ServicesP>
                    <ServicesP>Transportaion and supply of computers equipments and life chat headset.</ServicesP>
                </ServicesCard>
                <ServicesCard>    
                    <ServicesP>Supply of gaskets, joints, packings and tighten ms.</ServicesP>
                    <ServicesP>Supply of ball valves, subsea valves, safety valves, relief valves abd bursting discs.</ServicesP>
                    <ServicesP>Supply and installations of furniture at offshore locations.</ServicesP>
                    <ServicesP>Supply of flanges, elbows, fittings hangers and pipe supports.</ServicesP>
                </ServicesCard>
                <NavBtn>
                   <NavBtnLink to="/contact">Contact Us Today</NavBtnLink>
                </NavBtn>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
