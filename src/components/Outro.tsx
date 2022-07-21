import React from 'react'
import styled from 'styled-components'
import confetti from '/images/image-confetti.jpg'
import currency from '/images/image-currency.jpg'
import plane from '/images/image-plane.jpg'
import rest from '/images/image-restaurant.jpg'

import { H2, H3, P } from './components'

const Article = styled.article`
    img {
        block-size: auto;
        inline-size: 100%;
        border-radius: 8px 8px 0 0;
    }

    .contents {
        padding-inline: 1.5rem;
        padding-block: 1rem 1.5rem;
        background-color: #fff;
    }

    & + & {
        margin-block-start: 2rem;
    }

    @media (min-width: 768px) {
        & + & {
            margin-block-start: 0;
        }
    }
`

const Container = styled.div`
    inline-size: 90%;
    margin: 0 auto;

    @media (min-width: 768px) {
        .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
        }
    }

    @media (min-width: 1280px) {
        inline-size: 80%;
    }

    @media (min-width: 1300px) {
        .container {
            display: flex;
        }
    }
`

const Section = styled.section`
    padding-block: 3rem;


`

const SPAN =  styled.span`
    font-size: .8rem;
`


const Outro = () => {
  return (
    <Section>
        <Container>
            <H2>
                Latest Articles
            </H2>

            <div className="container">
                <Article>
                    <img src={currency} alt="" />

                    <div className="contents">

                        <SPAN>
                            By Claire Robinson
                        </SPAN>

                        <H3>
                            Receive money in any currency with no fees
                        </H3>

                        <P className='ph3'>
                            The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...
                        </P>
                    </div>
                </Article>


                <Article>
                    <img src={rest} alt="" />

                    <div className="contents">

                        <SPAN>
                            By Wilson Hutton
                        </SPAN>

                        <H3>
                            Treat yourself without worrying about money
                        </H3>

                        <P className='ph3'>
                            Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...
                        </P>
                    </div>
                </Article>


                <Article>
                    <img src={plane} alt="" />

                    <div className="contents">

                        <SPAN>
                            By Wilson Hutton
                        </SPAN>

                        <H3>
                            Take your Easybank card wherever you go
                        </H3>

                        <P className='ph3'>
                            We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you...
                        </P>
                    </div>
                </Article>


                <Article>
                    <img src={confetti} alt="" />

                    <div className="contents">

                        <SPAN>
                            By Claire Robinson
                        </SPAN>

                        <H3>
                            Our invite-only Beta accounts are now live!
                        </H3>

                        <P className='ph3'>
                            After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site...
                        </P>
                    </div>
                </Article>
            </div>

            
        </Container>
    </Section>
  )
}

export default Outro