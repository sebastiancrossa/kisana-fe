import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

// Component Imports
import Header from './layout/Header';
import PersonalTasks from './components/PersonalTasks';
import Leaderboard from './components/Leaderboard';
import Feed from './layout/Feed';

const TopLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
`;

const BottomLayout = styled.div`
  
`;

const Container = styled.div`
    width: 90%;
    max-width: 1600px;
    margin: 0 auto;
    padding: 5px 0;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header branding="Kisana" />

          <Container>

            <TopLayout>
              <PersonalTasks />
              <Leaderboard />
            </TopLayout>

            <BottomLayout>
              <Feed />
            </BottomLayout>

          </Container>

        </div>
      </Router>
    );
  }
}

export default App;
