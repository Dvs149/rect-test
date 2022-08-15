import React, { useState } from 'react'

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

    
    return (
      <div>
          <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
              <textarea className="form-control" onChange={handleOnChange} id="exampleFormControlTextarea1" rows={3} value={text} />
              <button className='btn btn-primary mx-1 my-2' onClick={handleUpClick}>Uppercase</button>
              <button className='btn btn-primary mx-1 my-2' onClick={handleCleanClick}>Clean</button>
              <button className='btn btn-primary mx-1 my-2' onClick={handleLowClick}>lowercase</button>
              <h2>Text summary</h2>
              <p>{text.split(' ').length} words {text.length} characters.</p>
          </div>
      </div>

  )
}

export default TextForm