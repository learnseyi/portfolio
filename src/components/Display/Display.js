import React from 'react';
import {Card,Spinner}from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import Biodata from '../Biodata/Biodata';
import Contact from '../Contact/Contact';
import Gallery from '../ProjectGallery/Gallery';
import './Display.css'

const Display = ({isLoading})=>{
    const {display} =useParams();
    const data = display.charAt(0).toUpperCase()+ display.slice(1);
    return (
        <Card className='display-screen'style={{height:100+'vh'}}>
        {(()=>{
            switch(data){
                case 'Projects':
                    return(
                        isLoading ? <Spinner className='spinner'animation="border" variant="primary" size='md'/> :<Gallery/>
                    )
                case 'Contact':
                    return(
                        isLoading ? <Spinner className='spinner'animation="border" variant="primary" size='md'/> : <Contact/>
                    )
                default:
                        return(
                            isLoading ? <Spinner className='spinner'animation="border" variant="primary" size='md'/> : <Biodata/>
                        )
 }
 
 })()}
        </Card>
        
        );
}
export default Display;


