import React from 'react';
import {Button} from 'react-bootstrap';
import '../Bio/Bio.css';


const Project = ()=>{
    return(
        <div className='heading'>
             <h1>Projects</h1>
             <div className='d-flex '>
             <h5><strong>Slim's Financial</strong></h5>&nbsp;&nbsp;&nbsp;
             <Button size='sm' className='link'href='https://slimfinancial.netlify.app/' target='_blank'>Click for preview</Button> 
             </div>
             <ul>
                 <li>- &nbsp;Simple banking application that simulates basic user financial transactions<br/>&nbsp;&nbsp;&nbsp;built with reactjs and nodejs</li>
                 <li>- &nbsp;A full stack application with react on frontend and nodejs running on the serverside</li>
                 <li>- &nbsp;Using SQL as the server technology</li>
             </ul>
             <div className='d-flex '>
             <h5><strong>Omnifoods</strong></h5>&nbsp;&nbsp;&nbsp;
             <Button size='sm' className='link'href='https://omnifoods-1.netlify.app/' target="_blank" rel="noreferrer">Click for preview</Button> 
             </div>
             <ul>
                 <li>- &nbsp;Simple meal ordering service UI</li>
                 <li>- &nbsp;Built with Bootstrap library and vannilla javascript</li>
             </ul>
             <div className='d-flex '>
             <h5><strong>Fashioncode</strong></h5> &nbsp;&nbsp;&nbsp;
             <Button size='sm' className='link'href='https://fashioncode-v2.netlify.app/' target='_blank' rel='noreferrer'>Click for preview</Button> 
             </div>
             
             <ul>
                 <li>- &nbsp;Fashion website built with HTML,CSS and vanilla javascript using Bootstrap 4 library </li>
                 <li>- &nbsp;Improved my vanilla javascript skills and knowledge</li>
                 <li>- &nbsp;Challenges include implementing the slider logic </li>
             </ul>
             <hr style={{width:20 +'rem',textAlign:'center',border:2 +'px dotted'}}/>
        </div>
        
       
    )
}

export default Project;