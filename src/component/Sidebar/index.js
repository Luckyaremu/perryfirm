import React from 'react'
import { SidebarContainer, Icon, CloseIcon, 
    SidebarWrapper, SidebarMenu, SidebtnWrap, SidebarLink, SidebarRoute} from "./SideBarElements"

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about">
                        About Us
                    </SidebarLink>
                    <SidebarLink to="about">
                        Services
                    </SidebarLink>
                    <SidebarLink to="about">
                        Contact
                    </SidebarLink>
                </SidebarMenu>
                <SidebtnWrap>
                    <SidebarRoute to='/moreinfo'>
                        More info
                    </SidebarRoute>
                </SidebtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
