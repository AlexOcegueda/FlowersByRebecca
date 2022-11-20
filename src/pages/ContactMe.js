import React from 'react';
import styled from 'styled-components';


export default function ContactMe() {
  return (
    <>
      <InfoContainer>
        <ContactText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</ContactText>
        <Info src={require('./contactinfo.png')}></Info>
      </InfoContainer>
    </>
  )
}

export const ContactText = styled.p`
  margin: 0px 150px 40px 150px;
  font-weight: 600;
  font-family: 'Simonetta', cursive;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
`;

export const Info = styled.img`
  width: 90vh;
  height: 45vh;
  border-radius: .3rem;
`;
