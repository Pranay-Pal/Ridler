import "./index.css"
import submitimg from "./../../assets/Images/submit.png"
import bat from "./../../assets/Images/bat.png"
import { useState } from "react";
import { useNavigate} from "react-router-dom"
import riddler from "./../../assets/Images/riddler.png"

export default function Intro({images,btnimg,nav})
{
      const navigate= useNavigate();

      const handle =() => {
            navigate(nav);
      };
      
    return(
        <div className="Quiz">
        <img src={bat} style={{height:"100px", width:"auto", padding:"0px",margin:"10px" }}/>
        <img alt="Image" src={images} className="PicImage" />
        <button className="" onClick={handle} style={{backgroundColor:"transparent", border:"0px", margin:"10px", padding:"0px"}}><img src={btnimg} style={{height:"28px",backgroundColor:"transparent", border:"0px", margin:"0px", padding:"0px"}}/></button>
        <img src={riddler} style={{height:"30vh", width:"auto", padding:"0px",margin:"0px", position:"absolute",left:"0px",bottom:"0px"}}/>
        </div>
    )
}