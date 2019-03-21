import React, { Component } from 'react';
import styled from 'styled-components';

const UserInfo = styled.div`
    text-align: center;
`;

const Header = styled.h1`
    font-family: 'Open Sans', Arial;
    font-weight: 700;
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

export class Profile extends Component {
    render() {
        return (
            <div>
                <Container>
                    <UserInfo>
                        <h1>[]</h1>
                        <Header>User</Header>
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
