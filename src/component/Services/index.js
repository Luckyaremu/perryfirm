import React from 'react';
import Icon1 from "../../images/clearance.jpg";
import Icon2 from "../../images/security.jpg";
import Icon3 from "../../images/documents.jpg";
import Icon4 from "../../images/logistics.jpg";
import Icon5 from "../../images/bunker suppies.jpg";
import Icon6 from "../../images/haulage.jpg";
import { ServicesContainer, ServicesWrapper, ServicesH1, ServicesCard,
     ServicesIcon, ServicesH2, ServicesP} from "./ServicesElements.js";

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1> OUR SERVICES </ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>DPR Licenses </ServicesH2>
                 </ServicesCard>
                
                <ServicesCard>
                    <ServicesIcon src={Icon4}/>
                    <ServicesH2>Logistics and Procurements</ServicesH2>
               </ServicesCard>
                
                <ServicesCard>
                    <ServicesIcon src={Icon5}/>
                    <ServicesH2>Bunker Supplies</ServicesH2>
                </ServicesCard>
                
                <ServicesCard>
                    <ServicesIcon src={Icon6}/>
                    <ServicesH2>Haulage</ServicesH2>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Naval Clearance Of Vessels</ServicesH2>
                     </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Naval Armed Escort</ServicesH2>
                     </ServicesCard>

            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
