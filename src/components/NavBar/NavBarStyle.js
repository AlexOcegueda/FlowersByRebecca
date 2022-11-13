import styled from 'styled-components';

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: lightslategrey;
    border-bottom: 1px solid black;
    
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
    font-weight: 400;

    @media (max-width: 400px) {
        font-size: 12px;
    }
`;

export const Contact = styled.p`
    align-self: center;
    padding: 5px;
    background-color: lightblue;
    border-radius: 2rem;
    margin-right: 8px;
    color: white;

    :hover {
        background-color: white;
    }

    @media (max-width: 400px) {
        font-size: 12px;
        margin-right: 0px;
    }
`;