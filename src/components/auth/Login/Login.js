import React, { Component } from 'react'
import AuthService from '../../../utils/AuthService';

import { LoginModal, LoginModalBox, LoginModalClose, LoginModalForm, LoginInput } from './Login.styled';

export default class Login extends Component {
    state = {
        username: '',
        password: '',
        err: ''
    }

    service = new AuthService();

    closeLoginModal = e => {
        e.preventDefault();
        this.props.history.push({pathname: '/'})
    }

    handleLoginChange = e => {
        const { name, value } = e.target;
        this.setState({
          ...this.state,
          [name]: value
        });
    };

    handleLoginSubmit = e => {
        e.preventDefault();
        const { username, password } = this.state;

        this.service.login(username, password)
            .then(res => {
                this.props.getUser(res);
                this.props.history.push({pathname: '/'})
            })
            .catch(err => {
                this.setState({
                    ...this.state,
                    err: err.message
                })
            })
    }
  
    render() {
        return (
            <LoginModal>
                <LoginModalBox>
                    <LoginModalClose onClick={this.closeLoginModal} >X</LoginModalClose>
                    <LoginModalForm onSubmit={this.handleLoginSubmit} >
                        <h1>Login</h1>
                        <label>Email</label>
                        <LoginInput type="email" name="username" onChange={this.handleLoginChange} />
                        <label>Password</label>
                        <LoginInput type="password" name="password" onChange={this.handleLoginChange} />
                        <p>{this.state.err}</p>
                        <button type="submit" onSubmit={this.handleLoginSubmit} >Submit</button>
                    </LoginModalForm>
                </LoginModalBox>
            </LoginModal>
        )
    }
}
