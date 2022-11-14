import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/FooterBar'
import {BannerContainer, BannerText,
        ContentContainer, ContentItem, Contact} from './HomeStyle'

export default function Home() {
  return (
    <>
      <NavBar />
      <BannerContainer>
        <BannerText>Flowers By Rebecca</BannerText>
        <Contact to="/Contact">Contact Me</Contact>
      </BannerContainer>
      <ContentContainer>
        <ContentItem src={require("./BeckysFlowers/image1.jpeg")}></ContentItem>
        <ContentItem src={require("./BeckysFlowers/image1.jpeg")}></ContentItem>
        <ContentItem src={require("./BeckysFlowers/image1.jpeg")}></ContentItem>
        <ContentItem src={require("./BeckysFlowers/image1.jpeg")}></ContentItem>
        <ContentItem src={require("./BeckysFlowers/image1.jpeg")}></ContentItem>
        <ContentItem src={require("./BeckysFlowers/image1.jpeg")}></ContentItem>
        <ContentItem src={require("./BeckysFlowers/image1.jpeg")}></ContentItem>
        <ContentItem src={require("./BeckysFlowers/image1.jpeg")}></ContentItem>
      </ContentContainer>
      <Footer />
    </>
  )
}
