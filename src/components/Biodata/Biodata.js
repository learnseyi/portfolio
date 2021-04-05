import React from 'react';
import Bio from './Bio/Bio';
import Project from './Projects/Project';
import Employment from './Employment/Employment';
import Education from './Education/Education';


const Biodata = ()=>{
    return(
        <React.Fragment>
            <Bio/>
            <Project/>
            <Employment/>
            <Education/>
        </React.Fragment>

    )
}

export default Biodata;