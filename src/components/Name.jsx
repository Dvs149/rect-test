import React,{ useState } from 'react'
import style from "./style.module.css"
export default function Name({ name }) {

  const [count, setCount] = useState(0);

  const handleClick = () => {
      // console.log('counter');
      if(count >= 5) {
        console.log("c:"+count);
        setCount(1);
      } else {
        setCount(count + 1);
      }
  }
  // style for counter
  // const styleCount = {
  //   color:"brown",
  //   borderStyle: "dotted"
  // }
  return (
    // <div>{name}</div>
    <div>
      <h1>{name}</h1>
      <h2>hard coded Divyesh</h2>
      <h2 className={style.header}>the count : <span>{count}</span> </h2>
      <button onClick={handleClick}>
        Click me
      </button>
    </div>
  )
}
