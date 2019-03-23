import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

// Component Imports
import Header from './layout/Header';
import PersonalTasks from './components/PersonalTasks';
import Leaderboard from './components/Leaderboard';
import Feed from './layout/Feed';
import Login from './pages/Login';
import Profile from './pages/Profile';

const TopLayout = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
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

  componentDidMount() {
    /*
    axios.put("http://localhost:3300/user", {
      name: 'Sebastian Crossa',
      email: 'crossasebastian@gmail.com',
      tasks: [
        {
          title: 'Connect backend',
          created: '',
          done: true
        }
      ],
      follows: []
    }).then(response => this.setState({
      users: [...this.state.users, response.data]
    }));
    */
  }

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
