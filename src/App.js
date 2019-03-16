import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components'
import Header from './layout/Header'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header branding="Kisana" />
        </div>
      </Router>
    );
  }
}

export default App;
