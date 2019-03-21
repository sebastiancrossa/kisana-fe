import React, { Component } from 'react';
import FeedItem from './FeedItem';
import PropTypes from 'prop-types';

class FeedItems extends Component {
    constructor() {
        super(this);

        this.state = {
            feed: [
                {
                    name: 'Jonathan Chavez',
                    tasks: [
                        {
                            title: 'Competitive programming',
                            completed: false
                        },
                        {
                            title: 'Competitive programming',
                            completed: false
                        },
                        {
                            title: 'Competitive programming',
                            completed: false
                        }
                    ],
                    streak: '6'
                },
                {
                    name: 'Plary Tee',
                    tasks: [
                        {
                            title: 'Competitive programming',
                            completed: false
                        },
                        {
                            title: 'Competitive programming',
                            completed: false
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
                            completed: false
                        },
                        {
                            title: 'Competitive programming',
                            completed: false
                        }
                    ],
                    streak: '6'
                },
                {
                    name: 'Drew Johnson',
                    tasks: [
                        {
                            title: 'Competitive programming',
                            completed: false
                        },
                        {
                            title: 'Competitive programming',
                            completed: false
                        },
                        {
                            title: 'Competitive programming',
                            completed: false
                        }
                    ],
                    streak: '6'
                },
                {
                    name: 'Ericka Beelie',
                    tasks: [
                        {
                            title: 'Competitive programming',
                            completed: false
                        },
                        {
                            title: 'Competitive programming',
                            completed: false
                        },
                        {
                            title: 'Competitive programming',
                            completed: false
                        }
                    ],
                    streak: '6'
                }
            ]
        };
    }

    render() {
        const { feed } = this.props;

        return (
            <div>
                {feed.map(user => (
                    <FeedItem
                        name={feed.name}
                        tasks={feed.tasks}
                        streak={feed.streak}
                    />
                ))}
            </div>
        );
    }
}

FeedItems.propTypes = {
    feed: PropTypes.array.isRequired
}

export default FeedItems;
