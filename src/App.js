import React, { Component } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

import { LandingNav, NavUl, NavLi } from './App.styled';


import Home from './components/Home';
import AuthService from './utils/AuthService';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Dashboard from './components/Dashboard'

class App extends Component {
    state = {
        user: null
    }

    service = new AuthService();

    backHome = () => this.props.history.push('/');

    getUser = user => {
        this.setState({
            ...this.state,
            user
        });
    };

    isLoggedIn = () => {
        this.service.loggedin()
            .then(user => {
                this.setState({
                    ...this.state,
                    user
                })
            })
    }

    logout = () => {
        this.service.logout()
            .then(() => {
                this.setState({
                    ...this.state,
                    user: null
                })
            })
    }

    

    componentDidMount() {
        this.isLoggedIn();
    }

    render() {
        return (
            <div className="App">
                <LandingNav>
                    <img onClick={this.backHome} src="" alt="logo"/>
                    <NavUl>
                        {
                            this.state.user
                            ? (
                                <React.Fragment>
                                    <NavLi><Link to='/' onClick={this.logout}>Logout</Link></NavLi>
                                </React.Fragment>
                            )
                            : (
                                <React.Fragment>
                                    <NavLi><Link to='/login'>Log In</Link></NavLi>
                                    <NavLi><Link to='/signup'>Sign Up</Link></NavLi>
                                </React.Fragment>
                            )
                        }
                        
                    </NavUl>
                </LandingNav>
                <Switch>
                    <Route 
                    exact
                    path="/signup"
                    render={(e) => 
                        this.state.user
                        ? <Redirect to="/" />
                        : (
                        <React.Fragment>
                            <Home {...e} />
                            <Signup 
                            {...e}
                            getUser={this.getUser}
                            />
                        </React.Fragment>
                    )}
                    />
                    <Route 
                    exact
                    path="/login"
                    render={(e) => 
                        this.state.user
                        ? <Redirect to="/" />
                        : (
                        <React.Fragment>
                            <Home {...e} />
                            <Login 
                            {...e}
                            getUser={this.getUser}
                            />
                        </React.Fragment>
                    )}
                    />
                    <Route 
                    path="/"
                    component={
                    this.state.user
                    ? Dashboard
                    : Home
                    }
                    />
                </Switch>
            </div>
        );
   }
}

export default App;
