import React from 'react';
import styled from 'styled-components';

export default function Services() {
  return (
    <>
      <ContentContainer>
        <ContentItem src={require("./BeckysFlowers/long1.jpg")}></ContentItem> 
        <ContentItem src={require("./BeckysFlowers/long2.jpg")}></ContentItem>
        <ContentItem src={require("./BeckysFlowers/long3.jpg")}></ContentItem>
        <ContentItem src={require("./BeckysFlowers/long4.jpg")}></ContentItem>
        <ContentItem src={require("./BeckysFlowers/long5.jpg")}></ContentItem>
        <ContentItem src={require("./BeckysFlowers/long6.jpg")}></ContentItem>
        <ContentItem src={require("./BeckysFlowers/long7.jpeg")}></ContentItem>
        <ContentItem src={require("./BeckysFlowers/long8.jpeg")}></ContentItem>
      </ContentContainer>
    </>
  )
}

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
    width: 100%;
    height: 100%;

    :hover {
        cursor: pointer;
    }

`;
