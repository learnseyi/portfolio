import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useRef} from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap';
import Particles from 'react-particles-js';
import Display from '../Display/Display';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import {Card,ListGroupItem,ListGroup} from 'react-bootstrap';
import profileImage from '../images/profile.jpg';
import './App.css';


const particlesOptions = {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

function App() {
  const profileRef = useRef();
  const handleMouseEnter =(e)=>{
    if(e.type === 'mouseenter'){
      profileRef.current.classList.remove('profile');
      profileRef.current.classList.add('profile-2');
      
    } 
  }
  const handleMouseExit = (e)=>{
    if(e.type === 'mouseleave'){
      profileRef.current.classList.remove('profile-2');
      profileRef.current.classList.add('profile'); 
    }
  }
  return (
    <Router>
       <div className="">
         <Particles className='particles'
          params={particlesOptions}
        />
    <Container  fluid>
      <Row >
        <Col md={12} lg={4} >
        <Card className='profile-container'>
          <div className='display'>
        <Card.Img 
        className='profile'
        variant="top"
        src={profileImage}
        ref={profileRef} 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseExit}/>
        </div>
        
        <Card.Body style={{paddingTop:35+'px'}}>
          <Card.Title>
          <blockquote>
        <p style={{color:'#f3f178d7'}}>Learn from yesterday, live for today, hope for tomorrow. 
        The important thing is not to stop questioning.</p>
        <cite style={{color:'#f3f178d7'}}>&mdash; Albert Einstein</cite>
    </blockquote>
          </Card.Title>
        </Card.Body>
      </Card>
        <ListGroup className="list-group-flush text-center pt-0">
          <ListGroupItem className='profile-container'><Link style={{textDecoration:'none'}}to='/bio'>
            <Button className='button' size="lg" block>Bio</Button>
            </Link></ListGroupItem>
          <ListGroupItem className='profile-container'><Link style={{textDecoration:'none'}}to='/projects'>
          <Button className='button' size="lg" block>Projects</Button>
            </Link></ListGroupItem>
          <ListGroupItem className='profile-container'><Link style={{textDecoration:'none'}}to='/contact'>
          <Button className='button'size="lg" block>Contact</Button>
            </Link></ListGroupItem>
        </ListGroup>
        </Col>
        <Col md={12} lg={8} className='info-screen'>
        <Route exact path='/:display'>
            <Display/>
          </Route>
        </Col>
      </Row>
    </Container>
    </div>
    </Router>
    
  );
}

export default App;
