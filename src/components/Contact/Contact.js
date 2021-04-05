import React, { useState,useRef } from 'react';
import {Col,Form,Button} from 'react-bootstrap';
import { FaPaperPlane } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import '../Biodata/Bio/Bio.css';
import '../App/App.css';

const Contact = ()=>{
    const [fname,setFname] = useState(' ');
    const[lname,setLname] = useState(' ');
    const [email,setEmail] = useState(' ');
    const [message,setMessage] = useState(' ');
    const [state,setState] =useState(false)
    const [validated, setValidated] = useState(false);
    const formRef = useRef()

    const templateParams = {
        from_name: fname+" "+lname,
        email: email,
        message: `from: ${email} and message:  ${message}`
    }
    
    const getFname = (e)=> setFname(e.target.value);
    const getLname = (e)=> setLname(e.target.value);
    const getEmail = (e)=> setEmail(e.target.value);
    const getMessage = (e)=> setMessage(e.target.value);
    const sendMessage = (e)=>{
    const form = e.target;
    if (form.checkValidity(e) === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
      if(validated){
        setTimeout(()=> setState(false),1000)
        setState(true)
        emailjs.send(
            'service_zq7hd8o',
            'template_vafux3m',
            templateParams,
            'user_Nx1k3Q21iRxe84UcaeVXk'
        ).then(function(response) {
            console.log( response.status)
        })
      }
    }
    return(
         state ? 'loading' :
        <React.Fragment>
            <div className='heading pt-5'>
                <h1>Get in touch</h1>
                <p style={{textAlign:'center'}}>Thank you for taking time to visit my portfolio.<br/> 
                Kindly drop me your feedback 💕</p>
                 </div>
               <div style={{padding:20+'px'}}>
               <Form noValidate validated={validated} ref={formRef}>
                <Form.Row>
                        <Form.Group as={Col} controlId="formGridText">
                        <Form.Control required onChange={getFname}type="text" placeholder="First name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridText">
                        <Form.Control required onChange={getLname}type="text" placeholder="Last name" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Group onChange={getEmail}controlId="formGridEmail">
                        <Form.Control required  placeholder="Email" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control required onChange={getMessage}as="textarea" rows={7} />
                    </Form.Group>
                    <div className='d-flex justify-content-center'>
                    <Button onClick={sendMessage} style={{width:50+'%'}}className='button' size="md">
                        Send  &nbsp;{<FaPaperPlane/>}
                    </Button>
                    </div>
                </Form>
               </div>
            </React.Fragment>
        
    )
}

export default Contact;