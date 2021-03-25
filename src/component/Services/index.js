import React from 'react';
import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/security.svg";
import Icon3 from "../../images/document.svg";
import Icon4 from "../../images/svg-2.svg";
import Icon5 from "../../images/supply.svg";
import Icon6 from "../../images/svg-3.svg";
import { ServicesContainer, ServicesWrapper, ServicesH1, ServicesCard,
     ServicesIcon, ServicesH2, ServicesP} from "./ServicesElements.js";

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1> OUR SERVICES </ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Naval Clearance Of Vessels</ServicesH2>
                    <ServicesP>We help reduce fees and process your services</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Naval Armed Escort</ServicesH2>
                    <ServicesP>We help reduce fees and process your services</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>DPR Imports Permit </ServicesH2>
                    <ServicesH2>& Nimansa Vessels Registration</ServicesH2>
                    
                </ServicesCard>
                
                <ServicesCard>
                    <ServicesIcon src={Icon4}/>
                    <ServicesH2>Marine Logistics</ServicesH2>
                    <ServicesP>We help reduce fees and process your services</ServicesP>
                </ServicesCard>

                
                <ServicesCard>
                    <ServicesIcon src={Icon5}/>
                    <ServicesH2>Bunker Supplies</ServicesH2>
                    <ServicesP>We help reduce fees and process your services</ServicesP>
                </ServicesCard>

                
                <ServicesCard>
                    <ServicesIcon src={Icon6}/>
                    <ServicesH2>Haulage</ServicesH2>
                    <ServicesP>We help reduce fees and process your services</ServicesP>
                </ServicesCard>

            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
