import React from 'react';
import {Nav, LeftNav, RightNav, NavItem, WebsiteName} from './NavBarStyle';

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
                    <NavItem>Contact Me</NavItem>
                </RightNav>
            </Nav>
        </>

    )
}
