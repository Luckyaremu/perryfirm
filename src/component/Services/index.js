import React from 'react';
import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-2.svg";
import Icon3 from "../../images/svg-3.svg";
import { ServicesContainer, ServicesWrapper, ServicesH1, ServicesCard,
     ServicesIcon, ServicesH2, ServicesP} from "./ServicesElements.js";

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1> OUR SERVICES </ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP>We help reduce fees and process your services</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP>We help reduce fees and process your services</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP>We help reduce fees and process your services</ServicesP>
                </ServicesCard>

            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
