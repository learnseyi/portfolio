import React,{useState} from 'react';
import {Card}from 'react-bootstrap';
import {BrowserRouter as Router,useParams,Route, Switch} from 'react-router-dom';
import Bio from '../Bio/Bio';

const Display = ()=>{
    const {display} =useParams();
    const data = display.charAt(0).toUpperCase()+ display.slice(1);
    // try using short circuiting to achieve dynamic
   let item = data === 'Bio'? <Bio/> : <h1>Hola</h1>
    return (
        <Card>
            {item}
        </Card>
        
        );
}
export default Display;

// if(component  === 'Bio'){
//     return <Bio/>
    
// }else if(component === 'Project'){
// return <h1>Hello</h1> 

// }
