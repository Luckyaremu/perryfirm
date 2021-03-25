import React from 'react';
import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/security.svg";
import Icon3 from "../../images/document.svg";
import Icon4 from "../../images/svg-2.svg";
import Icon5 from "../../images/supply.svg";
import Icon6 from "../../images/approval.svg";
import { ServicesContainer, ServicesWrapper, ServicesH1, ServicesCard,
     ServicesIcon, ServicesH2, ServicesP} from "./ServicesElements.js";

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1> OUR SERVICES </ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>DPR Imports Permit </ServicesH2>
                    <ServicesP>@Trena general services, we can easily get you a DPR import permit to enable your perform your business efficiently within your region of permit</ServicesP>
                </ServicesCard>
                
                <ServicesCard>
                    <ServicesIcon src={Icon4}/>
                    <ServicesH2>Marine Logistics & Haulage</ServicesH2>
                    <ServicesP>@Trena general services, we can clear your vessels within 48 hours with affordable negotiations as agreed with your team</ServicesP>
               </ServicesCard>

                
                <ServicesCard>
                    <ServicesIcon src={Icon5}/>
                    <ServicesH2>Bunker Supplies</ServicesH2>
                    <ServicesP>@Trena general services, we can help you do your supplies at every point or place you want it</ServicesP>
                </ServicesCard>

                
                <ServicesCard>
                    <ServicesIcon src={Icon6}/>
                    <ServicesH2>Nimasa Vessels Registration</ServicesH2>
                    <ServicesP>@Trena general services, reach out to us to make your registration easy, efficient and affordable</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Naval Clearance Of Vessels</ServicesH2>
                    <ServicesP>@Trena general services, we can clear your vessels within 48 hours with affordable negotiations as agreed with your team</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Naval Armed Escort</ServicesH2>
                    <ServicesP>@Trena general services, we offer top security to your vessels and making sure all goods and are well protected</ServicesP>
                </ServicesCard>

            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
