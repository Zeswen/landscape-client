import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './components/Home';
import AuthService from './utils/AuthService';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Dashboard from './components/Dashboard';
import NewPage from './components/NewPage';
import Page from './components/Page';
import Editor from './components/Editor';

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
        this.setState(prevState => ({
            ...prevState,
            user
        }));
    };

    getUpdatedPages = () => {
        this.service.loggedin()
            .then(user => {
                this.setState(prevState => ({
                    ...prevState,
                    user
                }));
            })
    }

    isLoggedIn = () => {
        this.service.loggedin()
            .then(user => {
                this.setState(prevState => ({
                    ...prevState,
                    user
                }));
            })
    }

    logout = () => {
        this.service.logout()
            .then(() => {
                this.setState(prevState => ({
                    ...prevState,
                    user: null
                }));
            })
    }

    render() {
        return (
            <div className="App">
                <Switch>
                    <Route 
                    exact
                    path="/signup"
                    render={routerProps => this.state.user
                        ? <Redirect to="/" />
                        : (
                            <React.Fragment>
                                <Home {...routerProps} logout={this.logout} />
                                <Signup 
                                {...routerProps}
                                getUser={this.getUser}
                                />
                            </React.Fragment>
                        )
                    }
                    />
                    <Route 
                    exact
                    path="/login"
                    render={routerProps => this.state.user
                        ? <Redirect to="/" />
                        : (
                            <React.Fragment>
                                <Home {...routerProps} logout={this.logout} />
                                <Login 
                                {...routerProps}
                                getUser={this.getUser}
                                />
                            </React.Fragment>
                    )}
                    />
                    <Route 
                    exact
                    path="/newPage"
                    render={routerProps => (
                            <React.Fragment>
                                <Dashboard {...routerProps} user={this.state.user} logout={this.logout} />
                                <NewPage 
                                {...routerProps}
                                user={this.state.user}
                                getUpdatedPages={this.getUpdatedPages}
                                />
                            </React.Fragment>
                    )}
                    />
                    <Route 
                    exact
                    path="/pages/:id"
                    render={routerProps => (
                            <React.Fragment>
                                <Page
                                {...routerProps}
                                />
                            </React.Fragment>
                    )}
                    />
                    <Route 
                    exact
                    path="/pages/:id/edit"
                    render={routerProps => (
                            <React.Fragment>
                                <Editor 
                                {...routerProps}
                                />
                            </React.Fragment>
                    )}
                    />
                    <Route 
                    path="/"
                    render={routerProps => this.state.user
                    ? <Dashboard {...routerProps} user={this.state.user} logout={this.logout} />
                    : <Home {...routerProps} logout={this.logout} />
                    }
                    />
                </Switch>
            </div>
        );
   }
}

export default App;
