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
            <div class="card">
                <ContentItem src={require("./BeckysFlowers/image1.jpeg")}></ContentItem>
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>    
            <div class="card">
                <ContentItem src={require("./BeckysFlowers/image5.jpeg")}></ContentItem>
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div class="card">
                <ContentItem src={require("./BeckysFlowers/home6.jpg")}></ContentItem>
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div class="card">
                <ContentItem src={require("./BeckysFlowers/home5.jpg")}></ContentItem>
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div class="card">
                <ContentItem src={require("./BeckysFlowers/home4.jpg")}></ContentItem>
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div class="card">
                <ContentItem src={require("./BeckysFlowers/home3.jpg")}></ContentItem>
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div class="card">
                <ContentItem src={require("./BeckysFlowers/home2.jpg")}></ContentItem>
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div class="card">
                <ContentItem src={require("./BeckysFlowers/home1.jpg")}></ContentItem>
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>          
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
    font-size: 140px;
    font-family: 'Simonetta', cursive;
    padding-left: 50px;
    @media (max-width: 810px){
        font-size: 65px;
        padding-left: 80px;
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
    width: 100%;
    height: 100%;

    :hover {
        cursor: pointer;
    }

`;