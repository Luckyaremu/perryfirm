import React from 'react'
import {Nav, NavbarContainer, NavLogo } from "./NavbarElements"

const Navbar = () => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">Dollar</NavLogo>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </>
    );
};

export default Navbar
