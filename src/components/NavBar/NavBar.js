import React from 'react';
import {Nav, LeftNav, RightNav, NavItem, WebsiteName, Contact} from './NavBarStyle';

export default function NavBar() {
  return (
        <>
            <Nav>
                <LeftNav>
                    <WebsiteName>Flowers By Rebecca</WebsiteName>
                    <NavItem to="/">Home</NavItem>
                    <NavItem to="/Services">Services</NavItem>
                </LeftNav>
                <RightNav>
                    <Contact to="/Contact">Contact Me</Contact>
                </RightNav>
            </Nav>
        </>

    )
}
