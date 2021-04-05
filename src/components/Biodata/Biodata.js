import React from 'react';
import Bio from './Bio/Bio';
import Project from './Projects/Project';
import Employment from './Employment/Employment';
import Education from './Education/Education';
import '../Display/Display.css'



const Biodata = ()=>{
    return(
        <React.Fragment>
            <div className = 'display-screen' style={{height:100+'vh'}}>
            <Bio/>
            <Project/>
            <Employment/>
            <Education/>
            </div>
        </React.Fragment>

    )
}

export default Biodata;