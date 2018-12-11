import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { LandingNav, NewProjectButton, NavUl, NavLi } from './Navbar.styled';

export default class Navbar extends Component {
    backHome = () => this.props.history.push('/');

     render() {
        return (
            <LandingNav>
                <img onClick={this.backHome} src="" alt="logo"/>
                {
                this.props.user &&
                <Link to="/newPage"><NewProjectButton>New Project</NewProjectButton></Link>
                }
                <NavUl>
                    {
                    this.props.user
                    ? (
                        <React.Fragment>
                            <NavLi><Link to='/' onClick={this.props.logout}>Logout</Link></NavLi>
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
        )
    }
}
