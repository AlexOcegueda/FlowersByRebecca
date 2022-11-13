import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid gray;
    padding: 20px;
    
    @media (max-width: 400px){
        display: flex;
        justify-content: space-around;
    }
`;

export const LeftNav = styled.div`
    display: flex;
`;


export const RightNav = styled.div`
    
`;

export const WebsiteName = styled.p`
    font-weight: 800;
    font-size: 20px;
    padding: 5px;

    @media (max-width: 400px){
        font-size: 15px;
    }
`;

export const NavItem = styled(Link)`
    align-self: center;
    padding: 5px;
    font-weight: 400;
    text-decoration: none;
    color: black;

    :hover {
        cursor: pointer;
        color: gray;

    }

    @media (max-width: 400px) {
        font-size: 12px;
    }
`;

export const Contact = styled(Link)`
    align-self: center;
    padding: 10px;
    background-color: rgb(36, 160, 237);
    border-radius: 2rem;
    margin-right: 8px;
    color: white;
    font-weight: 600;
    text-decoration: none;

    :hover {
        background-color: lightblue;
        color: black;
        cursor: pointer;
    }

    @media (max-width: 400px) {
        font-size: 12px;
        margin-right: 0px;
    }
`;