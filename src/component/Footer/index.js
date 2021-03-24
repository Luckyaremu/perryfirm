import React from 'react';
import {animateScroll as scroll} from "react-scroll";
import {FooterContainer, FooterLinksWrapper, FooterLinksContainer,
FooterLinkItems, FooterLinkTitle, FooterLink, FooterWrap, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from "./FooterElements.js";

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> ABOUT US </FooterLinkTitle>
                                <FooterLink to="/about">About us</FooterLink>
                                <FooterLink to="/about">About us</FooterLink>
                                <FooterLink to="/about">About us</FooterLink>
                                <FooterLink to="/about">About us</FooterLink>
                                <FooterLink to="/about">About us</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle> ABOUT US </FooterLinkTitle>
                                <FooterLink to="/about">About us</FooterLink>
                                <FooterLink to="/about">About us</FooterLink>
                                <FooterLink to="/about">About us</FooterLink>
                                <FooterLink to="/about">About us</FooterLink>
                                <FooterLink to="/about">About us</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> ABOUT US </FooterLinkTitle>
                                <FooterLink to="/about">About us</FooterLink>
                                <FooterLink to="/about">About us</FooterLink>
                                <FooterLink to="/about">About us</FooterLink>
                                <FooterLink to="/about">About us</FooterLink>
                                <FooterLink to="/about">About us</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle> ABOUT US </FooterLinkTitle>
                                <FooterLink to="/about">About us</FooterLink>
                                <FooterLink to="/about">About us</FooterLink>
                                <FooterLink to="/about">About us</FooterLink>
                                <FooterLink to="/about">About us</FooterLink>
                                <FooterLink to="/about">About us</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
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
