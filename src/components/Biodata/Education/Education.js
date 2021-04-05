import React from 'react';
import './Education.css'

const Employment =()=>{
    return(
        <div className='heading'>
            <div className='title'>
             <h1>Education</h1>
             <li><h5>Zero To Mastery Academy&nbsp;(Online)</h5></li>
             <li><p>&nbsp;-&nbsp;certificate</p></li>
             <li ><p className='dates'>October 2020 - March 2021</p></li>
             </div>
             <div>
             <ul>
                 <li>- &nbsp;Full stack developer Training </li>
                 <li>- &nbsp;Frontend training in HTML,CSS,javascript and reactjs</li>
                 <li>- &nbsp;Backend training in Nodejs,Database management with SQL and MongoDB</li>
             </ul>
             </div>
             <div className='title'>
                    <li><h5>Intellipaat E-Learning India &nbsp;(Online) </h5></li>
                    <li><p>&nbsp;-&nbsp;certificate</p></li>
                    <li ><p className='dates'>December 2019 - October 2020</p></li>
                 </div>
                 <div>
                 <ul>
                 <li>- &nbsp;Training on Linux Administration</li>
                 <li>- &nbsp;Training on cloud technology and Administration</li>
                 <li>- &nbsp;Microsoft Azure Administrator Training</li>
                 <li>- &nbsp;Python programming</li>
             </ul>
             </div>
             <div className='title'>
                    <li> <h5>University of Ilorin  Nigeria</h5></li>
                    <li><p>&nbsp;-&nbsp;BSc Geography</p></li>
                    <li ><p className='dates'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;June 1999 - October 2002</p></li>
             </div>
             <hr style={{width:20 +'rem',textAlign:'center',border:2 +'px dotted'}}/>
        </div>
        
       
    )
}

export default Employment;
