import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Component import
import App from './App';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Missing from './pages/Missing';

const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Login} />
                {/*
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/user" component={Profile} />
                */}

                <Route component={Missing} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
