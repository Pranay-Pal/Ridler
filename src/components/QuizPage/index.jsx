import "./index.css"
import submitimg from "./../../assets/Images/submit.png"
import bat from "./../../assets/Images/bat.png"
import { useState } from "react";
import { useNavigate} from "react-router-dom"
import riddler from "./../../assets/Images/riddler.png"

export default function QuizPage({image})
{
    const [text, setText] = useState('');
    const handleChange = (event) => {
        setText(event.target.value);
      };
      const navigate= useNavigate();

      const handle =() => {

            const a="/"+text;
            console.log(a);
            navigate(a);
      };
      
    return(
        <div className="Quiz">
        <img src={bat} style={{height:"100px", width:"auto", padding:"0px",margin:"10px" }}/>
        <img alt="Image" src={image} className="PicImage" />
        <input type="text" value={text} onChange={handleChange} style={{ backgroundColor:"white", opacity:"0.5", border:"3px solid #CB2B2B", borderRadius:"3px", margin:"7px", padding:"4px"}}/>
        <button className="" onClick={handle} style={{backgroundColor:"transparent", border:"0px", margin:"0px", padding:"0px"}}><img src={submitimg} style={{height:"28px",backgroundColor:"transparent", border:"0px", margin:"0px", padding:"0px"}}/></button>
        <img src={riddler} style={{height:"30vh", width:"auto", padding:"0px",margin:"0px", position:"absolute",left:"0px",bottom:"0px"}}/>
        </div>
    )
}