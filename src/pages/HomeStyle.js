import styled from "styled-components";

export const BannerContainer = styled.div`
    background-color: orange;
    padding: 130px;
    display: flex;
    justify-content: center;
`;

export const BannerText = styled.div`
    font-weight: 500;
    font-size: 40px;

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
    border: 2px solid black;
    width: 100%;
`;