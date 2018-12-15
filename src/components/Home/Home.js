import React from 'react'

import Navbar from '../Navbar';

import { HomeWrapper } from './Home.styled';

const Home = props => (
    <React.Fragment>
        <Navbar {...props} />
        <HomeWrapper>
            <p>Home</p>
        </HomeWrapper>
    </React.Fragment>
);

export default Home;
