import React, { Component } from 'react';
import AuthService from '../../utils/AuthService';
import './AuthModal.css'

import {
  AuthModalContainer,
  AuthModalBox,
  StyledH1,
  AuthModalClose,
  CloseImage,
  AuthModalForm,
  AuthInput,
  SubmitButton,
  LdsDualRing,
} from './AuthModal.styled';

export default class AuthModal extends Component {
  state = {
    email: '',
    password: '',
    err: '',
    isSubmitting: false,
    closeModal: false
  };

  service = new AuthService();

  closeAuthModal = e => {
    e.preventDefault();
    this.setState(prevState => ({
      ...prevState,
      closeModal: true
    }))
    setTimeout(() => this.props.history.push({ pathname: '/' }), 250)
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
    this.setState(prevState => ({
      ...prevState,
      isSubmitting: true
    }))
    this.service.signup(email, password)
    .then(res => {
      this.props.getUser(res);
      this.props.history.push({ pathname: '/' });
    })
    .catch(err => {
      this.setState(prevState => ({
          ...prevState,
          isSubmitting: false,
          err: err.message
      }));
  })
  };

  handleLogin = e => {
    e.preventDefault();
    const { email: username, password } = this.state;
    this.setState(prevState => ({
      ...prevState,
      isSubmitting: true
    }))
    this.service.login(username, password)
        .then(res => {
            this.props.getUser(res);
            this.props.history.push({pathname: '/'})
        })
        .catch(err => {
            this.setState(prevState => ({
                ...prevState,
                isSubmitting: false,
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
      <AuthModalContainer className={this.state.closeModal ? 'fade-out' : ''} >
        <AuthModalBox >
          <AuthModalClose onClick={this.closeAuthModal}>
            <CloseImage src={require('../../images/close.png')} alt="close button"/>
          </AuthModalClose>
          <StyledH1>{title}</StyledH1>
          <AuthModalForm onSubmit={handleFormSubmit}>
            <AuthInput
              placeholder="Email"
              type="email"
              name="email"
              onChange={this.handleAuthChange}
            />
            <AuthInput
              placeholder="Password"
              type="password"
              name="password"
              onChange={this.handleAuthChange}
            />
            <p>{this.state.err}</p>
            {this.state.isSubmitting 
            ? <LdsDualRing/>
            : (<SubmitButton type="submit" onSubmit={this.handleAuthSubmit}>
              Submit
            </SubmitButton>)}
          </AuthModalForm>
        </AuthModalBox>
      </AuthModalContainer>
    );
  }
}
