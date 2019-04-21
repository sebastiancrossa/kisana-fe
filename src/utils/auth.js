import auth0 from 'auth0-js';

import React, { Component } from 'react';

class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'kisana.auth0.com',
    clientID: '8tw77l2LrXt6FcRhIeaNpyqvaWTU6G35',
    redirectUri: 'http://localhost:3000/callback',
    responseType: 'token id_token',
    scope: 'openid profile email'
  });

  login = () => {
    this.auth0.authorize();
  };
}

export default Auth;
