import React from 'react'

import Navbar from '../Navbar';

import { HomeWrapper, Header, Logo } from './Home.styled';

const Home = props => (
    <React.Fragment>
        <Navbar {...props} />
        <HomeWrapper>
            <Header>
                <Logo>Landscape</Logo>
            </Header>
        </HomeWrapper>
    </React.Fragment>
);

export default Home;
