import React, { Component } from 'react';
import styled from 'styled-components';

const LeaderboardItemCell = styled.div`
    margin-bottom: 20px;
    background-color: #FFF;
    border-radius: 8px;
    height: 70px;
`;

const LeaderboardItems = styled.div`
    display: grid;
    grid-template-columns: repeat(4, auto);

    padding-top: 7px;

    font-family: 'Open Sans', Arial;
    font-weight: 800;
    font-size: 14px;
    color: #222B3E;

    justify-items: center;
`;

class LeaderboardItem extends Component {

    state = {
        image: '[]',
        name: 'Sebastian Crossa',
        streak: '7'
    }

    render() {

        const { image, name, streak } = this.state;

        return (
            <LeaderboardItemCell>
                <LeaderboardItems>
                    <h3>1st</h3>
                    <h3>{image}</h3>
                    <h3>{name}</h3>
                    <p>🔥{streak}</p>
                </LeaderboardItems>
            </LeaderboardItemCell>
        )
    }
}

export default LeaderboardItem;
