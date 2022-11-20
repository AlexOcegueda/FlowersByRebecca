import React from 'react';
import styled from 'styled-components';
import './ContactMeStyle.css';

export default function ContactMe() {
  return (
    <>
      <InfoContainer>
        <Heading>Contact Me For More Information!</Heading>
        <ContactText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</ContactText>
        <CardContainer>  
          <Info src={require('./contactinfo.png')}></Info>
        </CardContainer>
        <Row3Container>    
          <p><Map title='desmoines' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191047.8647128363!2d-93.74660144655195!3d41.56658493855789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87ee99a4c1611ee7%3A0x710028512691e4b2!2sDes%20Moines%2C%20IA!5e0!3m2!1sen!2sus!4v1668952519723!5m2!1sen!2sus" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Map></p>
          <form action="https://formspree.io/f/xeqddgoo" method="POST">
            <div className="form-group">
              <label className="formtext">Full Name</label>
              <input type="name" className="form-control" id="exampleInputName1" placeholder="Enter Full Name" name="Name" requried/>
            </div>
            <div className="form-group">
              <label className="formtext">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="Email" required/>
            </div>
            <div className="form-group">
              <label className="formtext">Your Message</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="Message" required></textarea>
            </div>
            <button type="submit" id="contact-submit" className="btn btn-primary">Submit</button>
          </form>
        </Row3Container>
      </InfoContainer>
    </>
  )
}

export const Heading = styled.h1`

`;

export const ContactText = styled.p`
  margin: 0px 150px 40px 150px;
  font-weight: 600;
  font-family: 'Simonetta', cursive;

  @media(max-width: 810px) {
    margin: 0px 0px 0px 0px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
`;

export const CardContainer = styled.div`
  margin: 0px 150px 0px 150px;

  @media(max-width: 810px) {
    margin: 0px 0px 0px 0px;
  }
`;

export const Info = styled.img`
  width: 100%;
  height: 100%;
  border-radius: .3rem;
`;

export const Row3Container = styled.div`
  display: flex;

  @media(max-width: 810px) {
    flex-direction: column;
  }
`;

export const Map = styled.iframe`
  padding: 10px;
  border-radius: 1rem;
  
  @media(max-width: 810px) {
    padding: 10px 30px 0px 30px;
  }
`;
