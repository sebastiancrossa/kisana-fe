import React, { Component } from 'react';
import styled from 'styled-components';

const UserInfo = styled.div`
    text-align: center;
    background-color: #fff;
    padding: 60px;
    border-radius: 8px;
    width: 500px;

    display: grid;
    grid-template-columns: repeat(2, auto);
    margin: 0 auto;
`;

const Header = styled.h1`
    font-family: 'Open Sans', Arial;
    font-weight: 700;
    color: #222B3E;
`;

const Title = styled.h2`
    font-family: 'Open Sans', Arial;
    font-weight: 600;
    color: #222B3E;
`;

const SubHeader = styled.h3`
    font-family: 'Open Sans', Arial;
    font-weight: 600;
    color: #222B3E;
`;

const Container = styled.div`
    width: 50%;

    display: block;
    margin: 100px auto;
    padding: 50px;
`;

const InfoLeft = styled.div`

`;

const InfoRight = styled.div`
    text-align: left;
`;

const InfoTitle = styled.p`

`;

const InfoTasks = styled.p`

`;

export class Profile extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Title>User</Title>
                    <UserInfo>
                        <InfoLeft>
                            <h1>[img]</h1>
                            <Header>Sebastian <br /> Crossa</Header>
                        </InfoLeft>
                        <InfoRight>
                            <InfoTitle>Tasks:</InfoTitle>
                            <InfoTasks>Finish up project</InfoTasks>
                            <InfoTasks>Send YC app</InfoTasks>
                            <InfoTasks>Complete auth</InfoTasks>
                            <InfoTasks>Test app with users</InfoTasks>
                            <InfoTasks>Study for Chino</InfoTasks>
                        </InfoRight>
                    </UserInfo>



                    <SubHeader>Tasks:</SubHeader>
                    <ul>
                        <li>Finish up front</li>
                        <li>Clean up code</li>
                        <li>Read book</li>
                        <li>Clean up room</li>
                    </ul>
                </Container>
            </div>
        )
    }
}

export default Profile
