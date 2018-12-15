import React from 'react';
import { Link } from 'react-router-dom';

const PageCard = (props) => (
  <div key={props.id} className="card" style={{ width: '18rem' }}>
    <Link to={`/pages/${props.id}`}>
      <img
        className="card-img-top"
        src={require("../../images/projects.png")}
        alt="Card imagecap"
      />
    </Link>
    <div
      className="card-body"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'space-evenly'
      }}
    >
      <h5 className="card-title">{props.title}</h5>
      <Link to={`/pages/${props.id}/edit`} className="btn btn-primary">
        Edit
      </Link>
    </div>
  </div>
);

export default PageCard;
