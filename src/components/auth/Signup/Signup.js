import React, { Component } from 'react'
import AuthService from '../../../utils/AuthService';

import { RegisterModal, RegisterModalBox, RegisterModalClose, RegisterModalForm, RegisterInput } from './Signup.styled';

export default class Signup extends Component {
    state = {
        email: '',
        password: '',
    }

    service = new AuthService();

    closeRegisterModal = e => {
        e.preventDefault();
        this.props.history.push({pathname: '/'})
    }

    handleRegisterChange = e => {
        const { name, value } = e.target;
        this.setState({
          ...this.state,
          [name]: value
        });
    };

    handleRegisterSubmit = e => {
        e.preventDefault();
        const { email, password } = this.state;

        this.service.signup(email, password)
            .then(res => {
                this.props.getUser(res);
                this.props.history.push({pathname: '/'})
            })
    }
  
    render() {
        return (
            <RegisterModal>
                <RegisterModalBox>
                    <RegisterModalClose onClick={this.closeRegisterModal} >X</RegisterModalClose>
                    <RegisterModalForm onSubmit={this.handleRegisterSubmit} >
                        <h1>Sign Up</h1>
                        <label>Email</label>
                        <RegisterInput type="email" name="email" onChange={this.handleRegisterChange} />
                        <label>Password</label>
                        <RegisterInput type="password" name="password" onChange={this.handleRegisterChange} />
                        <p>{this.props.message}</p>
                        <button type="submit" onSubmit={this.handleRegisterSubmit} >Submit</button>
                    </RegisterModalForm>
                </RegisterModalBox>
            </RegisterModal>
        )
    }
}
