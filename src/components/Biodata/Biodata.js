import React from 'react';
import {Container,Card} from 'react-bootstrap';
import Bio from './Bio/Bio';
import Project from './Projects/Project';
import Employment from './Employment/Employment';
import Education from './Education/Education';
import '../Display/Display.css'



const Biodata = ()=>{
    return(
            <Container >
            <Card className='display-screen'style={{height:`${100}vh`}}>
            <div >
            <Bio/>
            <Project/>
            <Employment/>
            <Education/>
            </div>
            </Card>
            </Container>
        

    )
}

export default Biodata;