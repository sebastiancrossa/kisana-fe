import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// Component imports
import FeedItem from '../components/FeedItem';

const FeedView = styled.div`

`;

const Container = styled.div`
    width: 94%;
    margin: 0 auto 50px auto;
    max-width: 1100px;
`;

const Title = styled.h2`
    font-family: 'Open Sans', Arial;
    font-weight: 600;
    color: #222B3E;
`;

const FeedItems = styled.div`
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-gap: 30px;
    grid-row-gap: 30px;
`;

class Feed extends Component {

    constructor() {
        super();

        this.state = {
            feed: [
                {
                    name: 'Jonathan Chavez',
                    tasks: [
                        {
                            title: 'Competitive programming',
                            completed: true
                        },
                        {
                            title: 'Work on Kisana backend',
                            completed: false
                        },
                        {
                            title: 'Competitive programming',
                            completed: true
                        }
                    ],
                    streak: '6'
                },
                {
                    name: 'Plary Tee',
                    tasks: [
                        {
                            title: 'Competitive programming',
                            completed: true
                        },
                        {
                            title: 'Competitive programming',
                            completed: true
                        },
                        {
                            title: 'Competitive programming',
                            completed: false
                        }
                    ],
                    streak: '6'
                },
                {
                    name: 'Ohana Matt',
                    tasks: [
                        {
                            title: 'Competitive programming',
                            completed: false
                        },
                        {
                            title: 'Competitive programming',
                            completed: true
                        },
                        {
                            title: 'Competitive programming',
                            completed: true
                        }
                    ],
                    streak: '6'
                },
                {
                    name: 'Drew Johnson',
                    tasks: [
                        {
                            title: 'Competitive programming',
                            completed: true
                        },
                        {
                            title: 'Competitive programming',
                            completed: true
                        },
                        {
                            title: 'Competitive programming',
                            completed: true
                        }
                    ],
                    streak: '6'
                },
                {
                    name: 'Ericka Beelie',
                    tasks: [
                        {
                            title: 'Competitive programming',
                            completed: true
                        },
                        {
                            title: 'Competitive programming',
                            completed: false
                        },
                        {
                            title: 'Competitive programming',
                            completed: true
                        }
                    ],
                    streak: '6'
                }
            ]
        };
    }

    componentDidMount() {
        // Fetch users from API
        axios
            .get("http://localhost:3300/user/5c93f867416d2e8df8875474")
            .then(response => {

                // Se crea un array de usuarios
                const newFeed = response.data.map(c => {
                    return {
                        name: c.first_name,
                        streak: c.streak,
                        tasks: c.tasks
                    };
                });

                const newState = Object.assign({}, this.state, {
                    feed: newFeed
                });

                this.setState(newState);

            }).catch(err => console.log(err));
    }

    render() {
        const { feed } = this.state;

        return (
            <FeedView>
                <Container>
                    <Title>Feed</Title>

                    <FeedItems>
                        {feed.map(user => (
                            <FeedItem
                                name={user.name}
                                tasks={user.tasks}
                                streak={user.streak}
                            />
                        ))}
                    </FeedItems>
                </Container>
            </FeedView>
        )
    }
}


export default Feed;
