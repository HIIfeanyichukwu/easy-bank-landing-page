import React from 'react'
import styled from 'styled-components'
import mockup from '/images/image-mockups.png'
import bg from '/images/bg-intro-desktop.svg'
import mobile from '/images/bg-intro-mobile.svg'
import Btn from './components'
import {P} from './components'

const Container = styled.div`
  padding-block-end: 5rem;
  
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
`

const Intro = () => {
  return (
    <Container>
      <Figure>
        <img src={mockup} alt="" />
      </Figure>
      <Section>
        <h1>Next generation digital banking</h1>
        <P> Take your financial life online. Your Easybank account will be a one-stop-shop 
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