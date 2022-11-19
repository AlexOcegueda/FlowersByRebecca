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
          <ContentItem src={require("./BeckysFlowers/image5.jpeg")}></ContentItem>
          <ContentItem src={require("./BeckysFlowers/home1.jpg")}></ContentItem>
          <ContentItem src={require("./BeckysFlowers/home2.jpg")}></ContentItem>
          <ContentItem src={require("./BeckysFlowers/home3.jpg")}></ContentItem>
          <ContentItem src={require("./BeckysFlowers/home4.jpg")}></ContentItem>
          <ContentItem src={require("./BeckysFlowers/home5.jpg")}></ContentItem>
          <ContentItem src={require("./BeckysFlowers/home6.jpg")}></ContentItem>
        </ContentContainer>
      <Footer />
    </>
  )
}
