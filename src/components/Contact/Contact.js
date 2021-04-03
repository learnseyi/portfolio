import React from 'react';
import {Col,Form,Button} from 'react-bootstrap';
import { FaPaperPlane } from 'react-icons/fa';
import '../Biodata/Bio/Bio.css';
import '../App/App.css';

const Contact = ()=>{
    return(
        <React.Fragment>
            <div className='heading pt-5'>
                <h1>Get in touch</h1>
                <p style={{textAlign:'center'}}>Thank you for taking time to visit my portfolio.<br/> 
                Kindly drop me your feedback 💕</p>
                 </div>
               <div style={{padding:20+'px'}}>
               <Form>
                <Form.Row>
                        <Form.Group as={Col} controlId="formGridText">
                        <Form.Control type="text" placeholder="First name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridText">
                        <Form.Control type="text" placeholder="Last name" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="formGridEmail">
                        <Form.Control placeholder="Email" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={7} />
                    </Form.Group>
                    <div className='d-flex justify-content-center'>
                    <Button style={{width:50+'%'}}className='button' size="md">
                        Send  &nbsp;{<FaPaperPlane/>}
                    </Button>
                    </div>
                </Form>
               </div>
            </React.Fragment>
        
    )
}

export default Contact;