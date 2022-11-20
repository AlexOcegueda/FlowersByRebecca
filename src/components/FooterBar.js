import React from 'react'
import styled from 'styled-components';

export const PageContainer = styled.div`
  position: relative;
  min-height: 100vh;
`;

export const FooterText = styled.footer`
    color: white;
    font-family: 'Simonetta', cursive;
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  border-top: 1px solid black;

`;

export default function FooterBar() {
  return (
    <>
      <PageContainer>
        <Footer>
          <FooterText>
            © Copyright
          </FooterText>
        </Footer>
      </PageContainer>
    </>
  )
}
