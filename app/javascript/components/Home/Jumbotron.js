import React, { Component } from 'react'
import styled from 'styled-components'

const Section = styled.section`
    background-color: #000000;
    min-height: 550px;
    padding: 50px 10;
    color: #fff;
    `

    const SectionTwo = styled.section`
    background-color: #000000;
    min-height: 550px;
    padding: 50px 10;
    color: #fff;
    `

const Header = styled.h1`
color: #fff;
font-weight: 700;
font-size: 40px;
line-height: 52px;
`
const Subhead = styled.p`
font-size:18px;
font-weight:500;
`
const Button = styled.a`
display: inline-block;
text-decoration: none;
font-weight: bold;
padding: 10px 20px;
font-size: 18px;
cursor: pointer;
border-radius: 0;
background: #fff;
color: #333 !important;
box-shadow: 0px 0px 0px 3px #002054,
    -6px 6px #0249ba,
    -6px 6px 0px 3px #002054;
`

const Jumbotron = () => {
    return (
        <Section className="home-section--1">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-12 col-md-5 text-center">
                        
                            <Header>Brendhann's Dev Zone</Header>
                            </div>
                            </div>
                            <div className="row justify-content-center">
                            <div className="col-12 col-sm-12 col-md-5 text-center">
                            <Subhead>This is where i play with web development</Subhead>
                            <div className="cta-wrapper">
                            <div className="pt-4 pb-5 justify-content-center">
                                <Button className="btn fancy-btn">Check it out</Button>
                            </div>
                            </div>
                        
                    </div>

                   <div className="row justify-content-center">
                   
                   
                    <img src={"https://brendhann.ddns.net/brendhann.jpg"} alt="brendhann" width="50" height="500" />
                    
                    <div className="pt-4 pb-2 justify-content-center"></div>
                    </div>
                    This was a tutorial website that ive made my own with some minor altercations
                    <div className="pt-4 pb-2 justify-content-center"></div>
                    </div>
</div>
                
            
        </Section>
    )
}

export default Jumbotron