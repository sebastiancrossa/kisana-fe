import React, { Component } from 'react'
import styled from 'styled-components';
import Feed from '../layout/Feed';

const Cell = styled.div`
    background-color: #FFF;
    border-radius: 8px;
    height: 190px;

    padding: 0 20px 0 20px;
`;

const Layout = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);

    padding-top: 30px;
`;

const LayoutLeft = styled.div`
    align-items: center;
    padding-top: 15px;
`;

const LayoutRight = styled.div`
    padding-left: 10px;
`;

const Title = styled.h2`
    font-family: 'Open Sans', Arial;
    font-weight: 600;
    font-size: 15px;
    color: #222B3E;

    align-self: center;
`;

const List = styled.ul`
    font-family: 'Open Sans', Arial;
    font-weight: 600;
    font-size: 13px;
    color: #222B3E;
`;

const FeedText = styled.p`
    font-family: 'Open Sans', Arial;
    font-weight: 600;
    font-size: 16px;
    color: #222B3E;
    text-align: center;
`;

export class FeedItem extends Component {
    state = {
        name: 'Sebastian Crossa',
        streak: '7'
    }

    render() {
        const { name, streak } = this.state;

        return (
            <Cell>
                <Layout>
                    <LayoutLeft>
                        <FeedText>{name}</FeedText>
                        <FeedText>🔥{streak}</FeedText>
                    </LayoutLeft>

                    <LayoutRight>
                        <Title>What I'm working on today</Title>

                        <List>
                            <li>Competitive programming</li>
                            <li>Videogame dev</li>
                            <li>School work</li>
                        </List>
                    </LayoutRight>
                </Layout>
            </Cell>
        )
    }
}

export default FeedItem;
