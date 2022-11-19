import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { React } from 'react';

export default function NavBar() {

    return (
        <>
            <Nav>
                <LeftContainer>
                    <Logo>Flowers By Rebecca</Logo>
                </LeftContainer>
                <RightContainer>
                    <NavItem to="/">Home</NavItem>
                    <NavItem to="/Services">Services</NavItem>
                    <NavItem to="/Contact">Contact</NavItem>
                </RightContainer>
            </Nav>
        </>
    );

    
}

export const Nav = styled.nav`
    display: flex;
    border-bottom: 1px solid black;
    align-items: center;

    @media(max-width: 810px) {
        justify-content: space-between;
    }

    @media(max-width: 540px) {
        padding: 10px;
    }
`;

export const RightContainer = styled.div`
    
`;

export const LeftContainer = styled.div`
    
`;

export const NavItem = styled(Link)`
    text-decoration: none;
    padding: 10px;
    font-weight: 400;
    font-size: 20px;
    color black;
    font-family: 'Simonetta', cursive;
    :hover {
        color: white;
    }

    @media(max-width: 540px) {
        font-size: 18px;
    }
`;  

export const Logo = styled(Link)`
    text-decoration: none;
    padding: 10px;
    margin: 10px;
    font-weight: 900;
    font-size: 30px;
    color: black;
    font-family: 'Simonetta', cursive;

    @media(max-width: 540px) {
        font-size: 20px;
    }

    @media(max-width: 455px) {
        display: inline-block;
    }

`;  