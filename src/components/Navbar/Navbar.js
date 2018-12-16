import React from 'react';
import { Link } from 'react-router-dom';

import { LandingNav, Logo, NewProjectButton, LogoText, NavUl, NavLi, NavLink } from './Navbar.styled';

const Navbar = props => (
    <LandingNav>
        <Logo onClick={() => props.history.push('/')} src={require('../../images/logo.svg')} alt="logo"/>
        {props.user
        ? <Link to="/newPage"><NewProjectButton>New Project</NewProjectButton></Link>
        : <LogoText>Landscape</LogoText>
    }
        <NavUl>
            {props.user
                ? (
                    <React.Fragment>
                        <NavLi>
                            <NavLink to='/' onClick={props.handleLogout}>Logout</NavLink>
                        </NavLi>
                    </React.Fragment>
                )
                : (
                    <React.Fragment>
                        <NavLi><NavLink to='/login'>Log In</NavLink></NavLi>
                        <NavLi><NavLink to='/signup'>Sign Up</NavLink></NavLi>
                    </React.Fragment>
                )
            }
        </NavUl>
    </LandingNav>
);

export default Navbar;