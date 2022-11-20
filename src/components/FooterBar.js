import React from 'react'
import styled from 'styled-components';

export const FooterText = styled.footer`
    color: white;
    font-family: 'Simonetta', cursive;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  border-top: 1px solid black;
`;

export default function FooterBar() {
  return (
    <>
      <Footer>
        <FooterText>
          © Copyright
        </FooterText>
      </Footer>
    </>
  )
}
