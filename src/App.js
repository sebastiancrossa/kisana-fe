import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Component Imports
import Header from './layout/Header';
import PersonalTasks from './components/PersonalTasks';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header branding="Kisana" />
          <PersonalTasks />
        </div>
      </Router>
    );
  }
}

export default App;
