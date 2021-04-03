import React from 'react';
import {Card}from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import Biodata from '../Biodata/Biodata';
import Contact from '../Contact/Contact';
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
                        <Biodata/> 
                    )
                case 'Projects':
                    return(
                            <h1>I am Project</h1>
                    )
                case 'Contact':
                    return(
                            <Contact/>
                         
                    )
 }
 
 })()}
        </Card>
        
        );
}
export default Display;


