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
        <ContentContainer>
          <ContentItem src={require("./BeckysFlowers/image1.jpeg")}></ContentItem>
          <ContentItem src={require("./BeckysFlowers/image5.jpeg")}></ContentItem>
          <ContentItem src={require("./BeckysFlowers/home1.jpg")}></ContentItem>
          <ContentItem src={require("./BeckysFlowers/home2.jpg")}></ContentItem>
          <ContentItem src={require("./BeckysFlowers/home3.jpg")}></ContentItem>
          <ContentItem src={require("./BeckysFlowers/home4.jpg")}></ContentItem>
          <ContentItem src={require("./BeckysFlowers/home5.jpg")}></ContentItem>
          <ContentItem src={require("./BeckysFlowers/home6.jpg")}></ContentItem>
        </ContentContainer>
    </>
  )
}

export const BannerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 810px){
        padding: 0px 35px 0px 35px;
    }
`;

export const BannerText = styled.p`
    font-weight: 500;
    font-size: 120px;
    font-family: 'Simonetta', cursive;
    padding-left: 80px;
    @media (max-width: 810px){
        font-size: 65px;
    }
`;

export const Contact = styled(Link)`
    padding: 10px;
    background-color: rgb(82,31,31);
    border-radius: 2rem;
    margin-right: 8px;
    color: white;
    font-weight: 600;
    font-size: 12px;
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