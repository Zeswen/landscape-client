import React, { Component } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

import { LandingNav, NewProjectButton, NavUl, NavLi } from './App.styled';


import Home from './components/Home';
import AuthService from './utils/AuthService';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Dashboard from './components/Dashboard';
import NewPage from './components/NewPage';

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            user: null
        }
    
        this.service = new AuthService();
    
        this.isLoggedIn();
    }


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

    render() {
        return (
            <div className="App">
                <LandingNav>
                    <img onClick={this.backHome} src="" alt="logo"/>
                    {
                    this.state.user &&
                    <Link to="/newPage"><NewProjectButton>New Project</NewProjectButton></Link>
                    }
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
                    render={e => this.state.user
                        ? <Redirect to="/" />
                        : (
                            <React.Fragment>
                                <Home {...e} />
                                <Signup 
                                {...e}
                                getUser={this.getUser}
                                />
                            </React.Fragment>
                        )
                    }
                    />
                    <Route 
                    exact
                    path="/login"
                    render={e => this.state.user
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
                    exact
                    path="/newPage"
                    render={e => (
                            <React.Fragment>
                                <Dashboard {...e} />
                                <NewPage 
                                {...e}
                                user={this.state.user}
                                />
                            </React.Fragment>
                    )}
                    />
                    <Route 
                    path="/"
                    render={e => this.state.user
                    ? <Dashboard {...e} user={this.state.user} />
                    : <Home {...e} />
                    }
                    />
                </Switch>
            </div>
        );
   }
}

export default App;
