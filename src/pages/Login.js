import React, { Component } from 'react';
import styled from 'styled-components';

// Component imports
import RedBlobJS from '../components/RedBlob.js';
import RedBlob2 from '../components/RedBlob2';
import YellowBlob from '../components/YellowBlob';
import BlueBlob from '../components/BlueBlob';
import PurpleBlob from '../components/PurpleBlob';

const Body = styled.div`
    background-color: white;
    position: absolute;
    width: 100%;
    height: 100%;

    margin-bottom: -1500px;
    padding-bottom: 1500px;

    overflow-x: hidden;
`;

const Logo = styled.img`
    width: 100px;
    height: 100px;
`;

const HeaderText = styled.div`
    text-align: center;
`;

const Title = styled.h1`
    font-family: 'Rubik', Arial;
    font-weight: 500;
    color: #333;
    font-size: 50px;

    margin-bottom: 15px;
`;

const Description = styled.p`
    font-family: 'Rubik', Arial;
    font-weight: 400;
    color: #333;
    font-size: 18px;
`;

const Container = styled.div`
    align-items: center;
    width: 90%;
    max-width: 1100px;
    margin: 100px auto 0 auto;

    z-index: 1000;
`;

const LoginButton = styled.button`
    background-color: #00cc6f;
    padding: 13px 25px;
    border: none;
    border-radius: 5px;
    color: white;

    display: block;
    margin: 40px auto 0 auto;
`;

const HeaderImage = styled.img`
    width: 800px;
    height: 550px;

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

const ContentSectionIrregular = styled.div`
    display: block
    margin: 0 auto 180px auto;
    text-align: center;
`;

const ContentHeaderLeft = styled.h2`
    font-family: 'Rubik', Arial;
    font-weight: 500;
    color: #333;
    font-size: 30px;
    line-height: 50px;

    width: 300px;
    justify-self: end;
`;

const ContentHeaderRight = styled.h2`
    font-family: 'Rubik', Arial;
    font-weight: 500;
    color: #333;
    font-size: 30px;
    line-height: 50px;

    width: 300px;
    justify-self: start;
`;

const ContentHeaderCenter = styled.h2`
    font-family: 'Rubik', Arial;
    font-weight: 500;
    color: #333;
    font-size: 30px;
    line-height: 50px;

    width: 300px;
    margin: 40px auto;
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

const ContentImageCenter = styled.img`
    width: 850px;
    height: 180px;

    justify-self: end;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    border-radius: 8px;

    pointer-events: none;
    user-select: none;
`;


const CustomRedBlob = styled.div`
    position: absolute;

    left: -360px;
`;

const CustomRedBlob2 = styled.div`
    position: absolute;

    right: -350px;
    top: 2500px
`;

const CustomYellowBlob = styled.div`
    position: absolute;

    top: 1000px;
    right: -250px;
`;

const CustomBlueBlob = styled.div`
    position: absolute;

    top: 1600px;
    left: -300px;
`;

const CustomPurpleBlob = styled.div`
    position: absolute;

    top: -370px;
    right: -220px;
`;

const ContentImageRight = styled.img`
    width: 300px;
    height: 300px;

    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    border-radius: 8px;

    pointer-events: none;
    user-select: none;
`;

const Green = styled.span`
    /*
    color: #00cc6f;
    */

   color: #FFBC42;
`;

const Red = styled.span`
    color: #FB3640;
`;

const Yellow = styled.span`
    color: #FFBC42;
`;

const Purple = styled.span`
    color: #8A1C7C;
`;

const KisanaTitle = styled.h1`
    font-family: 'Open Sans', Arial;
    font-weight: 800;
    color: #333;
    font-size: 60px;

    margin-top: 25px;
`;

export class Login extends Component {
    render() {
        return (
            <Body>
                <CustomRedBlob>
                    <RedBlobJS />
                </CustomRedBlob>

                <CustomYellowBlob>
                    <YellowBlob />
                </CustomYellowBlob>

                <CustomBlueBlob>
                    <BlueBlob />
                </CustomBlueBlob>

                <CustomPurpleBlob>
                    <PurpleBlob />
                </CustomPurpleBlob>

                <CustomRedBlob2>
                    <RedBlob2 />
                </CustomRedBlob2>

                <Container>
                    <HeaderText>
                        <Logo src={require('../Logo@2x.png')} alt={'Kisana logo'} />
                        <KisanaTitle>Kisana</KisanaTitle>
                        <Title>Don't leave it for <Green>tomorrow</Green></Title>
                        <Description>Keep track of your tasks and compare your progress with others</Description>
                        <LoginButton className="join-waitlist">Join our waitlist</LoginButton>
                        <HeaderImage src={require('../app2_lp.png')} alt="Main Kisana app UI" />
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

                        <ContentSectionIrregular>
                            <ContentImageCenter src={require('../feed_lp.jpg')} alt="App feed" />
                            <ContentHeaderCenter>See what your <Purple>Kisana buddies</Purple> are up to</ContentHeaderCenter>
                        </ContentSectionIrregular>

                    </HeaderContent>

                </Container>
            </Body>
        )
    }
}

export default Login
