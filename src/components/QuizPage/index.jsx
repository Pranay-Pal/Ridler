import "./index.css"
import { useState } from "react";

export default function QuizPage({image})
{
    const [text, setText] = useState('');
    const handleChange = (event) => {
        setText(event.target.value);
      };
      
    return(
        <div className="Quiz">
        <img alt="Image" src={image} className="PicImage" />
        <input type="text" value={text} onChange={handleChange} />
        </div>
    )
}