import React from 'react';
import { Link } from 'react-router-dom';

import { EditButton } from './PageCard.styled';

const PageCard = (props) => (
  <div key={props.id} className="card" style={{ width: '18rem', height: '18rem' }}>
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
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'space-evenly',
      }}
    >
      <h5 className="card-title">{props.title}</h5>

      	<Link to={`/pages/${props.id}/edit`}>
        <EditButton>
      	  Edit
      </EditButton>
      	</Link>
    </div>
  </div>
);

export default PageCard;
