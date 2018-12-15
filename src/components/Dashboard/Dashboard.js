import React from 'react';

import Navbar from '../Navbar';
import PageCard from '../PageCard';

import { DashboardWrapper } from './Dashboard.styled';

const Dashboard = props => (
    <React.Fragment>
        <Navbar {...props} />
        <DashboardWrapper>
            {props.user && (props.user.pages || []).map(elem => (
                <PageCard key={elem._id} id={elem._id} title={elem.title} />
            ))}
        </DashboardWrapper>
    </React.Fragment>
);

export default Dashboard;