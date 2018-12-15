import React, { Component } from 'react';
import AuthService from '../../utils/AuthService';

import {
  AuthModal,
  AuthModalBox,
  AuthModalClose,
  AuthModalForm,
  AuthInput
} from './AuthModal.styled';

export default class Signup extends Component {
  state = {
    email: '',
    password: '',
    err: ''
  };

  service = new AuthService();

  closeAuthModal = e => {
    e.preventDefault();
    this.props.history.push({ pathname: '/' });
  };

  handleAuthChange = e => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  handleSignup = e => {
    e.preventDefault();
    const { email, password } = this.state;

    this.service.signup(email, password).then(res => {
      this.props.getUser(res);
      this.props.history.push({ pathname: '/' });
    });
  };

  handleLogin = e => {
    e.preventDefault();
    const { email: username, password } = this.state;

    this.service.login(username, password)
        .then(res => {
            this.props.getUser(res);
            this.props.history.push({pathname: '/'})
        })
        .catch(err => {
            this.setState(prevState => ({
                ...prevState,
                err: err.message
            }));
        })
}

  render() {
    const title = this.props.mode === 'login'
        ? 'Login'
        : 'Sign Up';
    const handleFormSubmit = this.props.mode === 'login'
        ? this.handleLogin
        : this.handleSignup;

    return (
      <AuthModal>
        <AuthModalBox>
          <AuthModalClose onClick={this.closeAuthModal}>
            X
          </AuthModalClose>
          <AuthModalForm onSubmit={handleFormSubmit}>
            <h1>{title}</h1>
            <label>Email</label>
            <AuthInput
              type="email"
              name="email"
              onChange={this.handleAuthChange}
            />
            <label>Password</label>
            <AuthInput
              type="password"
              name="password"
              onChange={this.handleAuthChange}
            />
            <p>{this.state.err}</p>
            <button type="submit" onSubmit={this.handleAuthSubmit}>
              Submit
            </button>
          </AuthModalForm>
        </AuthModalBox>
      </AuthModal>
    );
  }
}
