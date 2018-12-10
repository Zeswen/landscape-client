import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { DashboardWrapper } from './Dashboard.styled';

export default class Dashboard extends Component {
    render() {
        return (
            <DashboardWrapper>
                {
                this.props.user.pages.map(elem => (
                    <div key={elem._id}className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src={require('../../images/projects.png')} alt="Card imagecap" />
                        <div className="card-body" style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "space-evenly"}}>
                            <h5 className="card-title">{elem.title}</h5>
                            <Link to={`/pages/${elem._id}/edit`} className="btn btn-primary">Edit</Link>
                        </div>
                    </div>
                ))
                }
            </DashboardWrapper>
    )
  }
}
