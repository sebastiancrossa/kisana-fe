import React, { Component } from 'react';
import styled from 'styled-components';

const Header = styled.h1`
    font-family: 'Open Sans', Arial;
    font-weight: 700;
    color: #222B3E;

    text-align: center;
`;

const Container = styled.div`
    width: 50%;

    display: block;
    margin: 100px auto;
    padding: 50px;

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
            <div>
                <Container>
                    <Header>Kisana Login</Header>

                    <LoginButton>Sign in with Twitter</LoginButton>
                </Container>
            </div>
        )
    }
}

export default Login
