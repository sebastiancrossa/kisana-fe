import React, { Component } from 'react';
import styled from 'styled-components';

const LeaderboardItemCell = styled.div`
    margin-bottom: 10px;
    background-color: #FFF;
    border-radius: 8px;
    height: 60px;

    transform: scale(1.08);
`;

const LeaderboardItems = styled.div`
    display: grid;
    grid-template-columns: repeat(4, auto);

    font-family: 'Open Sans', Arial;
    font-weight: 800;
    font-size: 14px;
    color: #222B3E;

    justify-items: center;
    align-items: center;
`;

const Item = styled.div`
    font-size: 15px;
`;

const Icon = styled.img`
    width: 20px;
    height: 25px;
`;

class FirstLeaderboardItem extends Component {

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
                    <h3><Icon src={require('../gold.png')} alt="Gold medal" /></h3>
                    <Item>{image}</Item>
                    <Item>{name}</Item>
                    <Item>🔥{streak}</Item>
                </LeaderboardItems>
            </LeaderboardItemCell>
        )
    }
}

export default FirstLeaderboardItem
