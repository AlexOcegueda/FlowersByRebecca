import React from 'react';
import {Nav, LeftNav, RightNav, NavItem, WebsiteName, Contact} from './NavBarStyle';

export default function NavBar() {
  return (
        <>
            <Nav>
                <LeftNav>
                    <WebsiteName>FlowersByRebecca</WebsiteName>
                    <NavItem>Home</NavItem>
                    <NavItem>Services</NavItem>
                </LeftNav>
                <RightNav>
                    <Contact>Contact Me</Contact>
                </RightNav>
            </Nav>
        </>

    )
}
