import React from 'react'

import Navbar from '../Navbar';

import { HomeWrapper, Header } from './Home.styled';

const Home = props => (
    <React.Fragment>
        <Navbar {...props} />
        <HomeWrapper>
            <Header/>
        </HomeWrapper>
    </React.Fragment>
);

export default Home;
