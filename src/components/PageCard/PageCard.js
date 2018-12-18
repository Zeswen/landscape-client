import React from 'react';
import { Link } from 'react-router-dom';

import { Card, EditButton } from './PageCard.styled';

const PageCard = (props) => (
  // <Card key={props.id} className="card" style={{ width: '18rem', height: '18rem' }}>
  //   <Link to={`/pages/${props.url}`}>
  //     <img
  //       className="card-img-top"
  //       src={require("../../images/projects.png")}
  //       alt="Card imagecap"
  //     />
  //   </Link>
  //   <div
  //     className="card-body"
  //     style={{
  //       textAlign: 'center',
  //       display: 'flex',
  //       flexDirection: 'column',
  //       justifyContent: 'center',
  //       alignItems: 'space-evenly'
  //       }}
  //   >      	<Link to={`/pages/${props.url}/edit`}>
  //   <EditButton>
  //     Edit
  // </EditButton>
  //   </Link>
  //     <h5 className="card-title">{props.title}</h5>
  //    </div>
  // </Card>
  <Card className="card" style={{width: '18rem'}}>
  <Link to={`/pages/${props.url}`}><img className="card-img-top" src={require("../../images/projects-test.png")} alt="Card cap"/></Link>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <Link to={`/pages/${props.url}/edit`}><EditButton>Edit</EditButton></Link>
  </div>
</Card>
);

export default PageCard;
