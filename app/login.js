import './login.scss';
import React, { Component } from 'react';

export default class Login extends React.Component {
  static defaultProps = { message: "Enter your username and password to begin" };
  render() {
    return (
      <div className="login">
          <p className="message">{this.props.message}</p>
          <input type="text" placeholder="username"></input>
          <input type="password" placeholder="password"></input>
          <button>Login</button>
      </div>
    );
  }
}
