import React, { Component } from 'react'
import styled from 'styled-components';

const Cell = styled.div`
    background-color: #FFF;
    border-radius: 8px;
    height: 190px;
`;

const Layout = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
`;

const LayoutLeft = styled.div`

`;

const LayoutRight = styled.div`

`;

export class FeedItem extends Component {
    render() {
        return (
            <Cell>
                <Layout>
                    <LayoutLeft>
                        <h3>Image</h3>
                        <h3>Name</h3>
                        <h3>Streak</h3>
                    </LayoutLeft>

                    <LayoutRight>
                        <h3>What I'm working on today</h3>

                        <ul>
                            <li>Competitive programming</li>
                            <li>Videogame dev</li>
                            <li>School work</li>
                        </ul>
                    </LayoutRight>
                </Layout>
            </Cell>
        )
    }
}

export default FeedItem;
