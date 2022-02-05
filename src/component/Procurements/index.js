import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { ServicesContainer, ServicesWrapper, ServicesH1, ServicesCard, ServicesP, NavBtn, NavBtnLink} from "./HeroElements.js";

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1> Our procurements details</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>    
                    <ServicesP><i class="fa fa-hand-o-right" aria-hidden="true"></i>  Supply of safety and protection equipment.</ServicesP>
                    <ServicesP><i class="fa fa-hand-o-right" aria-hidden="true"></i>  Supply of motor pumps and breaks.</ServicesP>
                    <ServicesP><i class="fa fa-hand-o-right" aria-hidden="true"></i>  Supply of communication equipments and accessories such as rounters, moderms, hubs, cables etc.</ServicesP>
                    <ServicesP><i class="fa fa-hand-o-right" aria-hidden="true"></i>  Transportation and supply of computers equipments and life chat headset.</ServicesP>
                </ServicesCard>
                <ServicesCard>    
                    <ServicesP><i class="fa fa-hand-o-right" aria-hidden="true"></i>  Supply of gaskets, joints, packings and tighten ms.</ServicesP>
                    <ServicesP><i class="fa fa-hand-o-right" aria-hidden="true"></i>  Supply of ball valves, subsea valves, safety valves, relief valves and bursting discs.</ServicesP>
                    <ServicesP><i class="fa fa-hand-o-right" aria-hidden="true"></i>  Supply and installations of furniture at offshore locations.</ServicesP>
                    <ServicesP><i class="fa fa-hand-o-right" aria-hidden="true"></i>  Supply of flanges, elbows, fittings hangers and pipe supports.</ServicesP>
                </ServicesCard>
                <NavBtn>
                   <NavBtnLink to="/contact">Contact Us Today</NavBtnLink>
                </NavBtn>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
