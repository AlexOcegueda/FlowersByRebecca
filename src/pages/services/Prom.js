import styled from 'styled-components';

export default function Prom() {
  return (
    <>
        <ImgContainer>
            <ImgTall src={require('../BeckysFlowers/tall4.jpeg')}></ImgTall>
            <ImgLong src={require('../BeckysFlowers/long4.jpg')}></ImgLong>
            <ImgTall src={require('../BeckysFlowers/tall5.jpeg')}></ImgTall>
            <ImgTall src={require('../BeckysFlowers/tall1.jpeg')}></ImgTall>
            <ImgTall src={require('../BeckysFlowers/tall4.jpeg')}></ImgTall>
            <ImgLong src={require('../BeckysFlowers/long2.jpg')}></ImgLong>
            <ImgTall src={require('../BeckysFlowers/tall2.jpeg')}></ImgTall>
            <ImgTall src={require('../BeckysFlowers/tall3.jpeg')}></ImgTall>
            <ImgTall src={require('../BeckysFlowers/tall5.jpeg')}></ImgTall>
            <ImgTall src={require('../BeckysFlowers/tall1.jpeg')}></ImgTall>
            <ImgTall src={require('../BeckysFlowers/tall4.jpeg')}></ImgTall>
            <ImgLong src={require('../BeckysFlowers/long1.jpg')}></ImgLong>
            <ImgTall src={require('../BeckysFlowers/tall3.jpeg')}></ImgTall>
        </ImgContainer>
    </>
  );
}

export const ImgContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    grid-auto-flow: dense;
`;


export const ImgTall = styled.img`
    width: 100%;
    height: 100%;
    padding: 5px 5px 0px 5px;
    border-radius: 1rem;
`;

export const ImgLong = styled.img`
    width: 100%;
    height: 100%;
    padding: 5px 5px 0px 5px;
    border-radius: 1rem;
    grid-column-end: span 2;
`;