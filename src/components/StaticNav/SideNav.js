import React from 'react';
import {Card,ListGroupItem,ListGroup} from 'react-bootstrap';

import Display from '../Display/Display';

const SideNav = ()=>{
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
        </Card.Body>
      
      </Card>
    )
}
export default SideNav;