import React from "react";
import './PaperClip.css'
import profilePic from '../../assests/images.png'

const PaperClip=({contentText})=>{
return(
    <div className="paper-clip">
        <div className="paper-content">{contentText}</div>
        <div className="paper-sendby"><img src={profilePic} alt="pic"/></div>
    </div>
);
}
export default PaperClip;