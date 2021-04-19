import React from 'react';
import {animateScroll as scroll} from "react-scroll";
import {FooterContainer, FooterWrap, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from "./FooterElements.js";

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick= {toggleHome}>
                            Trena
                        </SocialLogo>
                        <WebsiteRights> Trena General services © {new Date().getFullYear()} All rights reserved</WebsiteRights>
                
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer