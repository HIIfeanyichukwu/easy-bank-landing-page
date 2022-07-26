import React from 'react'
import styled from 'styled-components'
import mockup from '/images/image-mockups.png'
import bg from '/images/bg-intro-desktop.svg'
import mobile from '/images/bg-intro-mobile.svg'
import Btn from './components'
import {P} from './components'

const Container = styled.div`
  padding-block-end: 5rem;


 @media (min-width: 1280px) {
  display: flex;
  justify-content: start;
  padding-block: 5rem 5rem;
  position: relative;

 }

 @media (min-width: 1300px) {
  padding-block: 7rem 7rem;
 }

 @media (min-width: 1440px) {
  padding-block: 8rem 8rem;
 }
  
`

const Figure = styled.figure`
  

  background-image: url(${mobile});
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  justify-content: center;
  background-position: 1px;

  img {
    block-size: auto;
    inline-size: 95%;
    margin-block-start: -33.5%;
  }


  @media (min-width: 1280px) {
    position: absolute;
    right: 0;
    top: 0;
    inline-size: 50%;
    block-size: 100%;

    background-image: url(${bg});
    background-position: 5% 75%;
    background-size: 160%;

    padding-block: 5rem;

    img {
      inline-size: 100%;
      position: absolute;
      margin-block-start: -25%;
      right: -17%;
    }
  }

  @media (min-width: 1440px) {
    /* background-position: 9% 75%; */
  }
`

const Section = styled.section`
  inline-size: 90%;
  text-align: center;
  margin: 0 auto;

  h1 {
    margin-block: 2.5rem 1.5rem;
    font-size: 2.5rem;
    line-height: 1.3;
    font-weight: 400;
    color: hsl(233, 26%, 24%);
  }


  @media (min-width: 768px) {

  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 3.5rem;
    }
  }

  @media (min-width: 1280px) {
    max-inline-size: 50%;
    margin: 0;
    padding-inline-start: 10%;
    text-align: left;
  }
`

const Intro = () => {
  return (
    <Container>
      <Figure>
        <img src={mockup} alt="" />
      </Figure>
      <Section>
        <h1>Next generation digital banking</h1>
        <P className='intro'> Take your financial life online. Your Easybank account will be a one-stop-shop 
    for spending, saving, budgeting, investing, and much more.
        </P>
       <Btn>
        Request Invite
       </Btn>
      </Section>
    </Container>
  )
}

export default Intro;