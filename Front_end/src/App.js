
import {useState} from "react";
import axios from "axios";
export default function App(){
 const[p,setP]=useState(""); const[b,setB]=useState("");
 return(<div style={{fontFamily:"monospace",padding:40,background:"#0f0f1a",color:"#fff",minHeight:"100vh"}}>
 <h1>✨ AI Blog Genie</h1>
 <textarea rows="5" style={{width:"100%"}} onChange={e=>setP(e.target.value)}/>
 <button onClick={async()=>{const r=await axios.post("http://localhost:5000/api/ai/generate",{prompt:p});setB(r.data.text)}}>
 Generate ✨</button>
 <pre>{b}</pre>
 </div>)
}
