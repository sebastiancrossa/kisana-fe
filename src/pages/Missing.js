import React, { Component } from 'react'
import styled from 'styled-components';

const Container = styled.div`
    background: white;
    width: 30%;
    text-align: center;
    display: block;
    margin: 0 auto;

    padding: 50px;
    box-shadow: 0px 3px 50px rgba(0,0,0,0.1);

    border-radius: 10px;
    
    position: fixed;
    top: 50%;
    left: 50%;

    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`;

export class Missing extends Component {
    render() {
        return (
            <Container>
                <h1>404 <br /> page not found</h1>
            </Container>
        )
    }
}

export default Missing
