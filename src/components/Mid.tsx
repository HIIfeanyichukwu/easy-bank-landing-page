import React from 'react'
import styled from 'styled-components'

import budget from '/images/icon-budgeting.svg';
import online from '/images/icon-online.svg'
import onboarding from '/images/icon-onboarding.svg'
import api from '/images/icon-api.svg'

import { H2, H3, P } from './components';

const Section = styled.section`
    background-color: hsl(220, 16%, 96%);
    padding-block: 3rem;

    .container {
        inline-size: 90%;
        text-align: center;
        margin: 0 auto;
    }

    @media (min-width: 768px) {
        .container section {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
        }
    }


    @media (min-width: 1280px) {
        .container {
            inline-size: 80%;
        }

    }

    @media (min-width: 1300px) {
        .container section {
            display: flex;
            text-align: left;
        }
    }
`

const Article = styled.article`
    
`


const Mid = () => {
  return (
    <Section>
        <div className="container">
            <H2>
                Why choose Easybank?
            </H2>
            <P className='mid'>
                We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
            </P>

            <section>
                <Article>
                    <img src={online} alt="" />

                    <H3>
                        Online Banking
                    </H3>

                    <P className='ph3 '>
                        Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.
                    </P>
                </Article>

                <Article>
                    <img src={budget} alt="" />

                    <H3>
                        Simple Budgeting
                    </H3>

                    <P className='ph3 '>
                        See exactly where your money goes each month. Receive notifications when you're close to your hitting limits.
                    </P>
                </Article>

                <Article>
                    <img src={onboarding} alt="" />

                    <H3>
                        Fast Onboarding
                    </H3>

                    <P className='ph3 '>
                        We don't do branches. Open your account in minutes online and start taking control of your finances right away.
                    </P>
                </Article>

                <Article>
                    <img src={api} alt="" />

                    <H3>
                        Open API
                    </H3>

                    <P className='ph3'>
                        Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.
                    </P>
                </Article>
            </section>
        </div>
    </Section>
  )
}

export default Mid