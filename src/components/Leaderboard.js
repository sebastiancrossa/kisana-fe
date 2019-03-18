import React, { Component } from 'react'
import styled from 'styled-components';
import LeaderboardItem from './LeaderboardItem';

// Component imports

const LeaderboardView = styled.div`
    margin-top: 20px;

`;

const Container = styled.div`
    width: 90%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 5px 0;
`;

const Title = styled.h2`
    font-family: 'Open Sans', Arial;
    font-weight: 600;
    color: #222B3E;
`;

const LeaderboardItems = styled.div`

`;

class Leaderboard extends Component {
    render() {
        return (
            <LeaderboardView>
                <Container>
                    <Title>Leaderboard</Title>

                    <LeaderboardItems>
                        <LeaderboardItem />
                        <LeaderboardItem />
                        <LeaderboardItem />
                    </LeaderboardItems>
                </Container>
            </LeaderboardView>
        );
    }
}

export default Leaderboard
