import React from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';

export default function Home() {
  return (
    <>
        <BannerContainer>
          <BannerText>Flowers By Rebecca</BannerText>
          <Contact to="/Contact">Contact Me</Contact>
        </BannerContainer>
    </>
  )
}

export const BannerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 103px;
    @media (max-width: 810px){
    }
`;

export const BannerText = styled.p`
    font-size: 140px;
    font-family: 'Simonetta', cursive;
    @media (max-width: 810px){
        font-size: 65px;
    }
`;

export const Contact = styled(Link)`
    padding: 10px;
    background-color: transparent;
    border: 2px solid white;
    border-radius: 2rem;
    margin-right: 8px;
    color: white;
    font-weight: 600;
    font-size: 15px;
    text-decoration: none;

    :hover {
        background-color: white;
        color: black;
        cursor: pointer;
    }

    @media (max-width: 810px) {
        font-size: 12px;
        margin-right: 0px; // this controls orientation of Bold Name
        padding: 6px;
    }
`;

