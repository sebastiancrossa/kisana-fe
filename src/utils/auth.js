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

  handleAuth = () => {
    this.auth0.parseHash((err, authRes) => {
      if (authRes) {
        localStorage.setItem('access_token', authRes.accessToken);
        localStorage.setItem('id_token', authRes.idToken);

        let expiresAt = JSON.stringify(
          authRes.expiresIn * 1000 + new Date().getTime()
        );

        localStorage.setItem('expiresAt', expiresAt);
      } else {
        console.log(err);
      }
    });
  };

  handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expiresAt');
  };
}

export default Auth;
