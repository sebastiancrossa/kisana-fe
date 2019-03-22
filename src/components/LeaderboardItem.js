import React, { Component } from 'react';
import styled from 'styled-components';

const LeaderboardItemCell = styled.div`
    margin-bottom: 11px;
    background-color: #FFF;
    border-radius: 8px;
    height: 55px;
`;

const LeaderboardItems = styled.div`
    display: grid;
    grid-template-columns: repeat(4, auto);

    padding-top: 6px;

    font-family: 'Open Sans', Arial;
    font-weight: 800;
    font-size: 14px;
    color: #222B3E;

    justify-items: center;
    align-items: center;
`;

const ItemName = styled.div`
    font-family: 'Open Sans', Arial;
    font-weight: 800;
    font-size: 15px;
    color: #222B3E;

    margin-bottom: 5px;
    align-self: center

    display: block;
    margin-top: 13px;
`;

const Icon = styled.img`
    width: 20px;
    height: 20px;
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
                    <ItemName>2nd</ItemName>
                    <ItemName>{image}</ItemName>
                    <ItemName>{name}</ItemName>
                    <ItemName>🔥{streak}</ItemName>
                </LeaderboardItems>
            </LeaderboardItemCell>
        )
    }
}

export default LeaderboardItem;
