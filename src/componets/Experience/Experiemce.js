import './Experience.css' ;
import React, { useContext } from "react";
import { themeContext } from "../../Context";

const Experience = ()=>{
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

    return (
 <div className='experience'>
    <div className='achievement'>
        <div className='circle'  style={{color: darkMode?'rgb(48, 206, 127)':''}}>2+</div>
        <span>Years</span>
        <span>Experience</span>
    </div>
    <div className='achievement'>
        <div className='circle'  style={{color: darkMode?'rgb(48, 206, 127)':''}}>10+</div>
        <span>Completed</span>
        <span>Projects</span>
    </div>
    <div className='achievement'>
        <div className='circle'  style={{color: darkMode?'rgb(48, 206, 127)':''}}>2+</div>
        <span>Companies</span>
        <span>Work</span>

    </div>
 </div>
    );
}
export default Experience ;




