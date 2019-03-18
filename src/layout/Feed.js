import React from 'react';
import styled from 'styled-components';

// Component imports
import FeedItem from '../components/FeedItem';

const FeedView = styled.div`

`;

const Container = styled.div`
    width: 94%;
    margin: 0 auto;
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

const Feed = (props) => {
    return (
        <FeedView>
            <Container>
                <Title>Feed</Title>

                <FeedItems>
                    <FeedItem />
                    <FeedItem />
                    <FeedItem />
                    <FeedItem />
                    <FeedItem />
                </FeedItems>
            </Container>
        </FeedView>
    )
}

export default Feed;
