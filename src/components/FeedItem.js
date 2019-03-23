import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Cell = styled.div`
    background-color: #FFF;
    border-radius: 8px;
    height: 190px;

    width: 340px;
`;

const Layout = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);

    max-width: 300px;
    padding-top: 15px;

    margin: 0 auto;
`;

const LayoutLeft = styled.div`
    align-items: center;
    padding: 15px 8px 0px 10px;
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

    padding-left: 30px;
`;

const ListItem = styled.p`
    margin-bottom: 5px;
    margin-top: 0px;
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
        const { name, streak, tasks, done } = this.props;

        const itemLineThrough = {
            textDecoration: 'line-through',
            color: '#C0C3D2'
        };

        const itemLineThroughNone = {
            textDecoration: 'none',
            color: '#222B3E'
        };

        return (
            <Cell>
                <Layout>
                    <LayoutLeft>
                        <FeedText>{name}</FeedText>
                        <FeedText>🔥{streak}</FeedText>
                    </LayoutLeft>

                    <LayoutRight>
                        <List>
                            {tasks.map(task => (
                                <ListItem style={task.done ? itemLineThrough : itemLineThroughNone}>{task.title}</ListItem>
                            ))}
                        </List>
                    </LayoutRight>
                </Layout>
            </Cell >
        )
    }
}

FeedItem.propTypes = {
    name: PropTypes.string.isRequired,
    streak: PropTypes.string.isRequired,
    tasks: PropTypes.array.isRequired
}

export default FeedItem;
