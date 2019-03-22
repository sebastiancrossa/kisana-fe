import React, { Component } from 'react';
import styled from 'styled-components';

const LeaderboardItemCell = styled.div`
    position: relative;
    overflow: hidden;
    margin-bottom: 20px;
    background-color: #FFF;
    border-radius: 8px;
    height: 140px;

    transform: scale(1.08);
`;

const LeaderboardItems = styled.div`
    display: grid;
    grid-template-columns: repeat(3, auto);

    font-family: 'Open Sans', Arial;
    font-weight: 800;
    font-size: 14px;
    color: #222B3E;

    justify-items: center;
    align-items: top;
`;

const Item = styled.div`
    font-size: 15px;
    flex: 1;

    padding-top: 23px;
`;

const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex: 10;
`;

const List = styled.div`
    list-style: none;
    text-align: center;

    padding-top: 75px;
`;

const Icon = styled.img`
    width: 20px;
    height: 25px;
`;

const Crown = styled.img`
    position: absolute;

    width: 30px;
    float: right;

    top: -13px;
    right: -16px;    

    transform: rotate(45deg);

`;

const Floral = styled.img`
    position: absolute;
    width: 100px;
    top: 30px;
    left: 125px;
`;

const Star = styled.img`
    position: absolute;
    overflow: hidden;
    display: inline-block;

    width: 90px;
    bottom: -25px;
    left: -5px;
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
                <Star src={require('../star.png')} alt="Star icon" />
                <LeaderboardItems>
                    <h3><Icon src={require('../gold.png')} alt="Gold medal" /></h3>
                    <Floral src={require('../floral.png')} alt="Floral icon" />
                    <ItemInfo>
                        <List>
                            <li>{image}</li>
                            <li>{name}</li>
                        </List>
                    </ItemInfo>
                    <Item>🔥{streak}</Item>
                </LeaderboardItems>
            </LeaderboardItemCell>
        )
    }
}

export default FirstLeaderboardItem
