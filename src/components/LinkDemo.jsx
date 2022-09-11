import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Name from './Name';

export default function LinkDemo() {

  let navigate = useNavigate();
  const [name,setName] = useState('');
  const [nameList,setNameList] = useState([]);
  const handleName = (event) => {
    // console.log(event.target.value); 
    setName(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    let tempName = nameList;
    tempName.push(name);
    setNameList(tempName);
    setName('');
    console.log(nameList); 

  }
  return (
    <div className='container'>
        <button className='btn btn-primary mx-1 my-2' onClick={()=>{navigate("/")}}>Home</button>
        <div>Link Demo Divyesh</div>
        <Name name="Divyesh" />
        <form onSubmit={handleSubmit}>
          <input className="form-control mx-1 my-2"  type="text" value={name} onChange={handleName} />
          <button className='btn btn-primary mx-1 my-2' >Submit</button>
        </form>
          {
          nameList.map((name, index)=>(
            <h3 key={index}>{name}</h3>
          ))
        }
        
    </div>

  )
}
