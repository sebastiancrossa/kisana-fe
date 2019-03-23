import React, { Component } from 'react';
import styled from 'styled-components';

// Component imports
import LoginHeader from '../layout/LoginHeader'

const Body = styled.div`
    background-color: white;
    position: absolute;
    width: 100%;
    height: 100%;

    margin-bottom: -1500px;
    padding-bottom: 1500px;
`;

const HeaderText = styled.div`
    text-align: center;
`;

const Title = styled.h1`
    font-family: 'Open Sans', Arial;
    font-weight: 700;
    color: #333;
    font-size: 50px;
`;

const Description = styled.p`
    font-family: 'Open Sans', Arial;
    font-weight: 600;
    color: #333;
    font-size: 18px;
`;

const Container = styled.div`
    align-items: center;
    width: 90%;
    max-width: 1100px;
    margin: 200px auto 0 auto;

    z-index: 1000;
`;

const LoginButton = styled.button`
    background-color: #00aced;
    padding: 10px 40px;
    border: none;
    border-radius: 5px;
    color: white;

    display: block;
    margin: 0 auto;
`;

const HeaderImage = styled.img`
    width: 800px;
    height: 500px;

    margin-top: 50px;

    border-radius: 8px;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);

    pointer-events: none;
    user-select: none;
`;

const HeaderContent = styled.div`
    margin-top: 170px;
`;

const ContentSection = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);

    grid-gap: 100px;

    margin-bottom: 180px;
`;

const ContentHeaderLeft = styled.h2`
    font-family: 'Open Sans', Arial;
    font-weight: 600;
    color: #333;
    font-size: 30px;
    line-height: 50px;

    width: 300px;
    justify-self: end;
`;

const ContentHeaderRight = styled.h2`
    font-family: 'Open Sans', Arial;
    font-weight: 600;
    color: #333;
    font-size: 30px;
    line-height: 50px;

    width: 300px;
    justify-self: start;
`;

const ContentImageLeft = styled.img`
    width: 450px;
    height: 300px;

    justify-self: end;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    border-radius: 8px;

    pointer-events: none;
    user-select: none;
`;

const ContentImageRight = styled.img`
    width: 300px;
    height: 300px;

    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    border-radius: 8px;

    pointer-events: none;
    user-select: none;
`;

const Blob1 = styled.img`
    position: absolute;
    top: 0;
    right: 0;


    z-index: 0;
`;

const Green = styled.span`
    color: #00cc6f;
`;

const Red = styled.span`
    color: #FB3640;
`;

const Yellow = styled.span`
    color: #FFBC42;
`;

export class Login extends Component {
    render() {
        return (
            <Body>
                <LoginHeader />

                <Container>
                    <HeaderText>
                        <Title>Don't leave it for <Green>tomorrow</Green></Title>
                        <Description>Keep track of your tasks and compare your progress with others</Description>
                        <HeaderImage src={require('../app_lp.jpg')} alt="Main Kisana app UI" />
                    </HeaderText>

                    <HeaderContent>

                        <ContentSection>
                            <ContentImageLeft src={require('../tasks_lp.png')} alt="App leaderboard" />
                            <ContentHeaderRight><Red>Add 5 tasks</Red> you want to accomplish each day</ContentHeaderRight>
                        </ContentSection>

                        <ContentSection>
                            <ContentHeaderLeft><Yellow>Stay accountable</Yellow> to your tasks and climb the leaderboard</ContentHeaderLeft>
                            <ContentImageRight src={require('../leaderboard_lp.png')} alt="App leaderboard" />
                        </ContentSection>

                    </HeaderContent>

                </Container>
            </Body>
        )
    }
}

export default Login
