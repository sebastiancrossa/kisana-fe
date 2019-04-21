import React, { Component } from 'react';
import styled from 'styled-components';
import Auth from '../utils/auth';

// Component imports
import RedBlobJS from '../components/RedBlob.js';
import RedBlob2 from '../components/RedBlob2';
import YellowBlob from '../components/YellowBlob';
import BlueBlob from '../components/BlueBlob';
import PurpleBlob from '../components/PurpleBlob';

const auth = new Auth();

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

  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
  }
`;

const HeaderText = styled.div`
  text-align: center;
  z-index: 100;
`;

const Title = styled.h1`
  font-family: 'Rubik', Arial;
  font-weight: 500;
  color: #333;
  font-size: 50px;

  margin-bottom: 15px;

  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

const Description = styled.p`
  font-family: 'Rubik', Arial;
  font-weight: 400;
  color: #333;
  font-size: 18px;

  @media (max-width: 716px) {
    display: block;
    margin: 0 auto;
    width: 400px;
  }

  @media (max-width: 480px) {
    font-size: 15px;
    width: 350px;
  }

  @media (max-width: 320px) {
    width: 240px;
  }
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

  font-family: 'Open Sans', Arial;

  display: block;
  margin: 40px auto 0 auto;

  &:hover {
    transform: scale(1.005);
    -webkit-box-shadow: 2px 8px 60px -15px rgba(0, 0, 0, 0.51);
    -moz-box-shadow: 2px 8px 60px -15px rgba(0, 0, 0, 0.51);
    box-shadow: 2px 8px 60px -15px rgba(0, 0, 0, 0.51);
    transition: all 0.2s ease-in-out;
  }
`;

const HeaderImage = styled.img`
  width: 800px;
  height: 550px;

  margin-top: 50px;

  border-radius: 8px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);

  pointer-events: none;
  user-select: none;

  @media (max-width: 850px) {
    width: 600px;
    height: 450px;
  }

  @media (max-width: 640px) {
    width: 500px;
    height: 400px;
  }

  @media (max-width: 540px) {
    width: 450px;
    height: 350px;
  }

  @media (max-width: 480px) {
    width: 400px;
    height: 300px;
  }

  @media (max-width: 440px) {
    width: 90%;
    height: 70%;
  }
`;

const HeaderContent = styled.div`
  margin-top: 170px;
`;

const ContentSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);

  grid-gap: 100px;

  margin-bottom: 180px;

  @media (max-width: 850px) {
    grid-template-columns: repeat(1, auto);
    grid-gap: 30px;
    text-align: center;
  }

  @media (max-width: 440px) {
    margin-bottom: 100px;
  }
`;

const ContentSectionIrregular = styled.div`
    display: block
    margin: 0 auto 180px auto;
    text-align: center;

    @media (max-width: 850px) {
        grid-template-columns: repeat(1, auto);
        rid-gap: 30px;
        text-align: center;
    }

    @media (max-width: 440px) {
        margin-bottom: 100px;
    }

    @media (max-width: 320px) {
        margin-top: 200px;
    }
`;

const ContentHeaderLeft = styled.h2`
  font-family: 'Rubik', Arial;
  font-weight: 500;
  color: #333;
  font-size: 30px;
  line-height: 50px;

  width: 300px;
  justify-self: end;

  @media (max-width: 850px) {
    justify-self: center;
  }

  @media (max-width: 320px) {
    font-size: 25px;
    width: 250px;
  }
`;

const ContentHeaderRight = styled.h2`
  font-family: 'Rubik', Arial;
  font-weight: 500;
  color: #333;
  font-size: 30px;
  line-height: 50px;

  width: 300px;
  justify-self: start;

  @media (max-width: 850px) {
    justify-self: center;
  }

  @media (max-width: 320px) {
    font-size: 25px;
    width: 250px;
  }
`;

const ContentHeaderCenter = styled.h2`
  font-family: 'Rubik', Arial;
  font-weight: 500;
  color: #333;
  font-size: 30px;
  line-height: 50px;

  width: 300px;
  margin: 40px auto;

  @media (max-width: 320px) {
    font-size: 25px;
    width: 250px;
  }
`;

const ContentImageLeft = styled.img`
  width: 450px;
  height: 300px;

  justify-self: end;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  pointer-events: none;
  user-select: none;

  @media (max-width: 850px) {
    justify-self: center;
  }

  @media (max-width: 500px) {
    width: 360px;
    height: 220px;
  }

  @media (max-width: 440px) {
    width: 320px;
    height: 210px;
  }

  @media (max-width: 360px) {
    width: 260px;
    height: 170px;
  }
`;

const ContentImageCenter = styled.img`
  width: 850px;
  height: 180px;

  justify-self: end;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  pointer-events: none;
  user-select: none;

  @media (max-width: 960px) {
    width: 750px;
    height: 155px;
  }

  @media (max-width: 800px) {
    width: 650px;
    height: 155px;
  }

  @media (max-width: 700px) {
    width: 550px;
    height: 130px;
  }

  @media (max-width: 595px) {
    width: 480px;
    height: 110px;
  }

  @media (max-width: 500px) {
    width: 400px;
    height: 100px;
  }

  @media (max-width: 440px) {
    width: 95%;
    height: 75%;
  }
`;

const CustomRedBlob = styled.div`
  position: absolute;

  left: -360px;

  @media (max-width: 960px) {
    left: -460px;
  }

  @media (max-width: 740px) {
    left: -500px;
  }
`;

const CustomRedBlob2 = styled.div`
  position: absolute;

  right: -350px;
  top: 2500px;
  @media (max-width: 850px) {
    right: -580px;
  }
`;

const CustomYellowBlob = styled.div`
  position: absolute;

  top: 1000px;
  right: -250px;

  @media (max-width: 960px) {
    right: -390px;
  }
`;

const CustomBlueBlob = styled.div`
  position: absolute;

  top: 1600px;
  left: -300px;

  @media (max-width: 960px) {
    left: -350px;
  }

  @media (max-width: 480px) {
    left: -390px;
  }

  @media (max-width: 340px) {
    left: -410px;
  }
`;

const CustomPurpleBlob = styled.div`
  position: absolute;

  top: -370px;
  right: -220px;

  @media (max-width: 570px) {
    right: -300px;
  }
`;

const ContentImageRight = styled.img`
  width: 300px;
  height: 300px;

  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  pointer-events: none;
  user-select: none;

  @media (max-width: 850px) {
    justify-self: center;
  }

  @media (max-width: 500px) {
    width: 250px;
    height: 250px;
  }
`;

const Green = styled.span`
  /*
    color: #00cc6f;
    */

  color: #ffbc42;
`;

const Red = styled.span`
  color: #fb3640;
`;

const Yellow = styled.span`
  color: #ffbc42;
`;

const Purple = styled.span`
  color: #8a1c7c;
`;

const KisanaTitle = styled.h1`
  font-family: 'Open Sans', Arial;
  font-weight: 800;
  color: #333;
  font-size: 60px;

  margin-top: 25px;

  @media (max-width: 480px) {
    font-size: 40px;
  }
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
            <Title>
              Don't leave it for <Green>tomorrow</Green>
            </Title>
            <Description>
              Keep track of your tasks and compare your progress with others
            </Description>
            <LoginButton className='login-btn' onClick={() => auth.login()}>
              Login
            </LoginButton>
            <HeaderImage
              src={require('../app2_lp.png')}
              alt='Main Kisana app UI'
            />
          </HeaderText>

          <HeaderContent>
            <ContentSection>
              <ContentImageLeft
                src={require('../tasks_lp.png')}
                alt='App leaderboard'
              />
              <ContentHeaderRight>
                <Red>Add 5 tasks</Red> you want to accomplish each day
              </ContentHeaderRight>
            </ContentSection>

            <ContentSection>
              <ContentHeaderLeft>
                <Yellow>Stay accountable</Yellow> to your tasks and climb the
                leaderboard
              </ContentHeaderLeft>
              <ContentImageRight
                src={require('../leaderboard_lp.png')}
                alt='App leaderboard'
              />
            </ContentSection>

            <ContentSectionIrregular>
              <ContentImageCenter
                src={require('../feed_lp.jpg')}
                alt='App feed'
              />
              <ContentHeaderCenter>
                See what your <Purple>Kisana buddies</Purple> are up to
              </ContentHeaderCenter>
            </ContentSectionIrregular>
          </HeaderContent>
        </Container>
      </Body>
    );
  }
}

export default Login;
