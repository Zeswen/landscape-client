import React, { Component } from 'react'

import { HomeWrapper } from './Home.styled';

import Navbar from '../Navbar';

export default class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <Navbar {...this.props} />
                <HomeWrapper>
                    <p>Home</p>
                </HomeWrapper>
            </React.Fragment>
    )
  }
}
