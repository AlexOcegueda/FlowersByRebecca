import styled from 'styled-components';
import { Contanier } from '../../globalStyle';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
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

export const NavItem = styled.p`
    align-self: center;
    padding: 5px;

    @media (max-width: 400px) {
        font-size: 12px;
    }
`;