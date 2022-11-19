import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { React } from 'react';

export default function NavBar() {

    return (
        <>
            <Nav>
                <Logo>Flowers By Rebecca</Logo>
                <NavItem to="/">Home</NavItem>
                <NavItem to="/Services">Services</NavItem>
                <NavItem to="/Contact">Contact</NavItem>
            </Nav>
        </>
    );

    
}

export const Nav = styled.nav`
    display: flex;
    border-bottom: 1px solid black;
    align-items: center;
    @media (max-width: 500px) {
        justify-content: space-between;
    }
`;

export const NavItem = styled(Link)`
    text-decoration: none;
    padding: 10px;
    margin: 10px;
    font-weight: 400;
    font-size: 20px;
    color black;
    font-family: 'Simonetta', cursive;
    :hover {
        color: white;
    }
`;  

export const Logo = styled(Link)`
    text-decoration: none;
    padding: 10px;
    margin: 10px;
    font-weight: 900;
    font-size: 30px;
    color black;
    font-family: 'Simonetta', cursive;

`;  