import React from 'react';
import './Employment.css'

const Employment =()=>{
    return(
        <div className='heading'>
            <div className='title'>
             <h1>Employment</h1>
             <li><h5>Investment Administrator</h5></li>
             <li><p>&nbsp;-&nbsp;Assiniboine Credit Union</p></li>
             <li ><p className='dates'>December 2020 - Present</p></li>
             </div>
             <div>
             <ul>
                 <li>- &nbsp;Processing Members investment instructions</li>
                 <li>- &nbsp;Providing investment support to front line staffs</li>
                 <li>- &nbsp;Assist with filling and organizing investment documents</li>
             </ul>
             </div>
             <div className='title'>
                    <li><h5>Member Service Advisor</h5></li>
                    <li><p>&nbsp;-&nbsp;Assiniboine Credit Union</p></li>
                    <li ><p className='dates'>October 2018 - December 2020</p></li>
                    </div>
                    <div>
             <ul>
                 <li>- &nbsp;Identifying Member financial needs and offering related products to satisfy the needs.</li>
                 <li>- &nbsp;Taking and actioning member transaction instructions accordingly</li>
                 <li>- &nbsp;Playing Key role in maintaining Member and credit Union relationship</li>
             </ul>
             </div>
             <div className='title'>
                    <li> <h5>Call center Representative</h5></li>
                    <li><p>&nbsp;-&nbsp;Ecom Customer Care</p></li>
                    <li ><p className='dates'>&nbsp;March 2018 - October 2018</p></li>
             <ul>
                 <li>- &nbsp;Building long term customer relationships and advising patients on purchases and promotions.</li>
                 <li>- &nbsp;Describing medications to patients and accurately explaining details and care to patients.</li>
                 <li>- &nbsp;Investigating and resolving patient inquiries and complaints in a timely and empathetic manner</li>
             </ul>
             </div>
             <hr style={{width:20 +'rem',textAlign:'center',border:2 +'px dotted'}}/>
        </div>
        
       
    )
}

export default Employment;