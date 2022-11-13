import styled from "styled-components";

export const BannerContainer = styled.div`
    background-color: orange;
    padding: 50px;
    display: flex;
    justify-content: center;
`;

export const BannerText = styled.div`
`;

export const ContentContainer = styled.div`
    padding: 20px;
    display: grid;
    grid-template-columns: auto auto auto auto;
    row-gap: 10px;
`;

export const ContentItem = styled.img`
    border: 2px solid black;
    width: 90%;
`;