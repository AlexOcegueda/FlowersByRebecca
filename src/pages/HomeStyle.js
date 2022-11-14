import styled from "styled-components";
import {Link} from 'react-router-dom';

export const BannerContainer = styled.div`
    padding: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 810px){
        padding: 90px;
    }
`;

export const BannerText = styled.p`
    font-weight: 500;
    font-size: 120px;
    font-family: 'Simonetta', cursive;
    @media (max-width: 810px){
        font-size: 45px;
    }
`;

export const Contact = styled(Link)`
    padding: 5px;
    margin-top: 20px;
    background-color: rgb(36, 160, 237);
    border-radius: 2rem;
    margin-right: 8px;
    color: white;
    font-weight: 600;
    font-size: 12px;
    text-decoration: none;

    :hover {
        background-color: lightblue;
        color: black;
        cursor: pointer;
    }

    @media (max-width: 810px) {
        font-size: 12px;
        margin-right: 0px; // this controls orientation of Bold Name
        padding: 6px;
    }
`;

export const ContentContainer = styled.div`
    padding: 20px;
    display: grid;
    grid-template-columns: auto auto auto auto;
    row-gap: 10px;
    column-gap: 10px;
    
    @media (max-width: 810px) {
        grid-template-columns: auto auto;
    }
`;

export const ContentItem = styled.img`
    width: 98%;
    height: 98%;

    :hover {
        width: 100%;
        height: 100%;
        cursor: pointer;
    }

    
`;

