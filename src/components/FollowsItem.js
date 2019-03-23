import React, { Component } from 'react';
import styled from 'styled-components';

const Card = styled.a`
    background: #fff;
    border-radius: 8px;
    padding: 20px;

    width: 150px;
    height: 180px;
    cursor: pointer;

    text-align: center;
`;

const ProfilePic = styled.img`

`;

const Name = styled.h2`
    font-family: 'Open Sans', Arial;
    font-weight: 600;
    color: #222B3E;
`;

const Streak = styled.h3`
    font-family: 'Open Sans', Arial;
    font-weight: 600;
    color: #222B3E;
`;

class FollowsItem extends Component {
    render() {
        return (
            <Card>
                <ProfilePic></ProfilePic>
                <Name>Sebastian Crossa</Name>
                <Streak>🔥7</Streak>
            </Card>
        )
    }
}

export default FollowsItem
