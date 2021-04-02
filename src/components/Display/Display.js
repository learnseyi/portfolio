import React from 'react';
import {Card}from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import Bio from '../Bio/Bio';
import './Display.css'

const Display = ()=>{
    const {display} =useParams();
    const data = display.charAt(0).toUpperCase()+ display.slice(1);
    
   let item = data === 'Bio'? <Bio/> : <h1>Hola</h1>
    return (
        <Card className='display-screen'style={{height:100+'vh'}}>
            {item}
        </Card>
        
        );
}
export default Display;


