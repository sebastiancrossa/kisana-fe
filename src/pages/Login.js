import React, { Component } from 'react';
import styled from 'styled-components';

// Component imports
import LoginHeader from '../layout/LoginHeader'

const Body = styled.div`
    background-color: white;
    position: absolute;
    width: 100%;
    height: 100%;
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
    margin: 90px auto 0 auto;
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

export class Login extends Component {
    render() {
        return (
            <Body>
                <LoginHeader />

                <Container>
                    <HeaderText>
                        <Title>Don't leave it for tomorrow</Title>
                        <Description>Keep track of your tasks and compare your progress with others</Description>
                    </HeaderText>
                </Container>
            </Body>
        )
    }
}

export default Login
