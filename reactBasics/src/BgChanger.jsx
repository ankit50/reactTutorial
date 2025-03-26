import {useState} from 'react';

export default function BgChanger() {
  const [color, setColor] = useState("black");
  return (
    <>
    <div style={{backgroundColor:color, display:"flex", height:"100px", margin:"40px", width:"50%"}}>
    </div>  
    <button onClick={()=>{setColor("Green")}}>Green</button>
    <button onClick={()=>setColor("Red")}>Red</button>
    <button onClick={()=>setColor("Blue")}>Blue</button>
    </>
  )
}
