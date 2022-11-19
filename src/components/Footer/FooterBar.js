import React from 'react'
import styled from 'styled-components';

export const Footer = styled.div`
    background-color: gray;
    color: white;
    margin-top: 200px;
    width: 100%;
    height: 100%;
    border-top: 1px solid black;
`;

export default function FooterBar() {
  return (
    <>
      <Footer>
        <p>COPYRIGHT</p>
      </Footer>
    </>
  )
}
