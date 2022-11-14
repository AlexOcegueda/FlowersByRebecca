import React from 'react';
import {Nav, LeftNav, RightNav, NavItem, WebsiteName} from './NavBarStyle';

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
                </RightNav>
            </Nav>
        </>

    )
}
