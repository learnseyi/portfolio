import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import SideNav from '../StaticNav/SideNav'
import Display from '../Display/Display';
import {BrowserRouter as Router,Switch,Route,Link,useParams} from 'react-router-dom';
import {Card,ListGroupItem,ListGroup} from 'react-bootstrap';

import './App.css';

function App() {
 
  return (
    <Router>
    <Container>
      <Row >
        <Col className='justify-content-center'md={12} lg={4}>
        <Card >
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
        </Card.Body>
      </Card>
        <ListGroup className="list-group-flush text-center">
          <ListGroupItem><Link to='/bio'>Bio</Link></ListGroupItem>
          <ListGroupItem><Link to='/projects'>projects</Link></ListGroupItem>
          <ListGroupItem><Link to='/contact'>contact</Link></ListGroupItem>
        </ListGroup>
        <Switch>
          
          
        </Switch>
        
        </Col>
        <Col md={12} lg={8}>
        <Route exact path='/:display'>
            <Display/>
          </Route>
        </Col>
      </Row>
    </Container>
    </Router>
    
  );
}

export default App;
