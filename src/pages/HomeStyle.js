import styled from "styled-components";

export const BannerContainer = styled.div`
    padding: 130px;
    display: flex;
    justify-content: center;
`;

export const BannerText = styled.p`
    font-weight: 500;
    font-size: 80px;
    font-family: 'Simonetta', cursive;

    @media (max-width: 400px){
        font-size: 30px;
    }
`;

export const ContentContainer = styled.div`
    padding: 20px;
    display: grid;
    grid-template-columns: auto auto auto auto;
    row-gap: 10px;
    column-gap: 10px;
    
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