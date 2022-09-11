import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
function TextForm() {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        const newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleCleanClick = () => {
        setText("");
    }
    const handleLowClick = () => {
        const newText = text.toLowerCase();
        setText(newText);
    }

    let navigate = useNavigate();
    
    return (
      <div className='container'>
          <div className="mb-3">
              <button className='btn btn-primary mx-1 my-2' onClick={handleUpClick}>Uppercase</button>
              <button className='btn btn-primary mx-1 my-2' onClick={handleCleanClick}>Clean</button>
              <button className='btn btn-primary mx-1 my-2' onClick={handleLowClick}>Lowercase</button>
              <button className='btn btn-primary mx-1 my-2' onClick={()=>{navigate("/Link")}}>Link</button><br />
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
              <textarea className="form-control" onChange={handleOnChange} id="exampleFormControlTextarea1" rows={3} value={text} />
              <h2>Text summary</h2>
              <p>{text.split(' ').filter((element)=> {return element.length!==0}).length} words {text.length} characters.</p>
          </div>
      </div>

  )
}

export default TextForm