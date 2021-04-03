import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import { FaUserAlt,FaMapMarker,FaEnvelopeOpenText,FaPhone,FaGit,FaLinkedin } from "react-icons/fa";
import './Bio.css';


const Bio = ()=>{
    return(
        <section>
            <div className='heading'>
                <Container fluid>
                <h1> Bio</h1>
                    <Row>
                        <Col>
                        <ul>
                            <li><FaUserAlt/> &nbsp; &nbsp; Seyi Agboola</li>
                            <li><FaEnvelopeOpenText/> &nbsp; &nbsp; contactseyi@gmail.com</li>
                            <li><FaPhone/> &nbsp; &nbsp; on request</li>
                        </ul>
                        </Col>
                        <Col md={{ offset: 1 }}>
                        <ul>
                            <li><FaMapMarker/> &nbsp; &nbsp; Winnipeg MB, Canada</li>
                            <li><FaGit/><a href='https://github.com/learnseyi' target='_blank' rel="noreferrer">
                                 &nbsp; &nbsp; https://github.com/learnseyi</a></li>
                            <li><FaLinkedin/><a href='https://www.linkedin.com/in/seyi-agboola-67682041/' target='_blank' rel="noreferrer">
                                 &nbsp; &nbsp;<small>www.linkedin.com/in/seyi-agboola-67682041</small></a></li>
                        </ul>
                        </Col>
                    </Row>
                </Container>
               <hr style={{width:20 +'rem',textAlign:'center',border:2 +'px dotted'}}/>
            </div>
        </section>
    )
}

export default Bio;