import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/FooterBar'
import {BannerContainer, BannerText,
        ContentContainer, ContentItem} from './HomeStyle'

export default function Home() {
  return (
    <>
      <NavBar />
      <BannerContainer>
        <BannerText>FlowersByRebecca</BannerText>
      </BannerContainer>
      <ContentContainer>
        <ContentItem src={require("./BeckysFlowers/image7.jpeg")}></ContentItem>
        <ContentItem src={require("./BeckysFlowers/image2.jpeg")}></ContentItem>
        <ContentItem src={require("./BeckysFlowers/image3.jpeg")}></ContentItem>
        <ContentItem src={require("./BeckysFlowers/image8.jpeg")}></ContentItem>
        <ContentItem src={require("./BeckysFlowers/image8.jpeg")}></ContentItem>
        <ContentItem src={require("./BeckysFlowers/image6.jpeg")}></ContentItem>
        <ContentItem src={require("./BeckysFlowers/image7.jpeg")}></ContentItem>
        <ContentItem src={require("./BeckysFlowers/image2.jpeg")}></ContentItem>
      </ContentContainer>
      <Footer />
    </>
  )
}
