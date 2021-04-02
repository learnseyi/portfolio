import React from 'react';
import {Card}from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import Bio from '../Bio/Bio';
import './Display.css'

const Display = ()=>{
    const {display} =useParams();
    const data = display.charAt(0).toUpperCase()+ display.slice(1);
    return (
        <Card className='display-screen'style={{height:100+'vh'}}>
        {(()=>{
            switch(data){
                case 'Bio':
                    return(
                        <Bio/> 
                    )
                case 'Projects':
                    return(
                            <h1>I am Projects</h1>
                    )
                case 'Contact':
                    return(
                            <h1>I am Contact</h1>
                         
                    )
 }
 
 })()}
        </Card>
        
        );
}
export default Display;


