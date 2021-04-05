import React from 'react';
import {Card,Spinner}from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import Biodata from '../Biodata/Biodata';
import Contact from '../Contact/Contact';
import Gallery from '../ProjectGallery/Gallery';
import './Display.css'

const Display = ({isLoading})=>{
    const {display} =useParams();

    return (
        <Card className='display-screen'style={{height:100+'vh'}}>
        {(()=>{
            switch(display){
                case 'projects':
                    return(
                        isLoading ? <Spinner className='spinner'animation="border" variant="primary" size='md'/> :<Gallery/>
                    )
                case 'contact':
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


