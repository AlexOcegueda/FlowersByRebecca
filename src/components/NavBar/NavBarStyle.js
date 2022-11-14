import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid gray;
    padding: 20px;
   
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

    @media (max-width: 810px){
        font-size: 12px;
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

    @media (max-width: 810px) {
        font-size: 12px;
    }
`;

