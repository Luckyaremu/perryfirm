import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, 
    NavLogo, MobileIcon, 
    NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from "./NavbarElements";

const Navbar = ( {toggle}) => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">Dollar</NavLogo>
                
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services">Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="update">Update</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                   <NavBtnLink to="/contact">Contact</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </>
    );

};

export default Navbar
