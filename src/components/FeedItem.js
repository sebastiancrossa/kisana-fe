import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
    render() {
        const { name, streak, tasks } = this.props;

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
                            {tasks.map(task => (
                                <li>{task.title}</li>
                            ))}
                        </List>
                    </LayoutRight>
                </Layout>
            </Cell>
        )
    }
}

FeedItem.propTypes = {
    name: PropTypes.string.isRequired,
    streak: PropTypes.string.isRequired,
    tasks: PropTypes.array.isRequired
}

export default FeedItem;
