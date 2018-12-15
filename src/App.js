import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './components/Home';
import AuthService from './utils/AuthService';
import AuthModal from './components/AuthModal';
import Dashboard from './components/Dashboard';
import NewPage from './components/NewPage';
import Page from './components/Page';
import Editor from './components/Editor';

class App extends Component {
  state = {
    user: null
  };

  service = new AuthService();

  componentDidMount() {
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
    this.service.loggedin().then(user => {
      this.setState(prevState => ({
        ...prevState,
        user
      }));
    });
  };

  isLoggedIn = () => {
    this.service
      .loggedin()
      .then(user => {
        this.setState(prevState => ({
          ...prevState,
          user: user
        }));
      })
      .catch(error => {
        console.log(error);
      });
  };

  logout = () => {
    this.service.logout().then(() => {
      this.setState(prevState => ({
        ...prevState,
        user: null
      }));
    });
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/signup"
            render={routerProps =>
              this.state.user ? (
                <Redirect to="/" />
              ) : (
                <React.Fragment>
                  <Home {...routerProps} handleLogout={this.logout} />
                  <AuthModal mode="signup" {...routerProps} getUser={this.getUser} />
                </React.Fragment>
              )
            }
          />
          <Route
            exact
            path="/login"
            render={routerProps =>
              this.state.user ? (
                <Redirect to="/" />
              ) : (
                <React.Fragment>
                  <Home {...routerProps} handleLogout={this.logout} />
                  <AuthModal mode="login" {...routerProps} getUser={this.getUser} />
                </React.Fragment>
              )
            }
          />
          <Route
            exact
            path="/newPage"
            render={routerProps => (
              <React.Fragment>
                <Dashboard
                  {...routerProps}
                  user={this.state.user}
                  handleLogout={this.logout}
                />
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
                <Page {...routerProps} />
              </React.Fragment>
            )}
          />
          <Route
            exact
            path="/pages/:id/edit"
            render={routerProps => (
              <React.Fragment>
                <Editor {...routerProps} />
              </React.Fragment>
            )}
          />
          <Route
            path="/"
            render={routerProps =>
              this.state.user ? (
                <Dashboard
                  {...routerProps}
                  user={this.state.user}
                  handleLogout={this.logout}
                />
              ) : (
                <Home {...routerProps} handleLogout={this.logout} />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
