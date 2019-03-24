import React, { Component } from 'react';
import styled from 'styled-components';

// Component Imports
import FollowsItem from '../components/FollowsItem';

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

const Follows = styled.div`
    margin-top: 50px;
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
    padding: 40px;
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

const FollowButton = styled.button`
    background-color: #00CC6F;
    color: white;

    display: block;
    margin: 0 auto;
    width: 40%;

    margin-top: 20px;
    padding: 20px 30px;
    border: none;
    border-radius: 5px;
`;

const FollowsList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, auto);

    grid-gap: 20px;
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

                    <FollowButton>Follow</FollowButton>

                    <Follows>
                        <SubHeader>Follows</SubHeader>
                        <FollowsList>
                            <FollowsItem />
                            <FollowsItem />
                            <FollowsItem />
                            <FollowsItem />
                            <FollowsItem />
                        </FollowsList>
                    </Follows>

                </Container>
            </div>
        )
    }
}

export default Profile
