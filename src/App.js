import React,{useState} from 'react'
const App = () => {
  const state=useState();
  const [count,setCount]=useState(new Date().toLocaleTimeString());
const IncNum=()=>{
  setCount(new Date().toLocaleTimeString());
};
  setInterval(IncNum,1)
  return (<>
    <h1>{count}</h1>
    </>
  )
}

export default App