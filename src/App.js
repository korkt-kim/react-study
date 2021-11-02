import React,{useState,useEffect, useRef} from 'react';
import ReactDOM from 'react-dom'


const usePreventLeave = (message="",isEnabled=false) =>{
  const listener = (e)=>{
    e.preventDefault();
    e.returnValue =""  // 이것이 페이지 이동을 막아준다.
  }
  const enablePrevent = () => window.addEventListener('beforeunload',listener)
  const disablePrevent = () => window.removeEventListener('beforeunload',listener)
  
  return {enablePrevent,disablePrevent};
}

function App() {
  const {enablePrevent:protect,disablePrevent:unprotect} = usePreventLeave();
  return (
    <div >
      <button onClick={protect}>Protect</button>
      <button onClick={unprotect}>UnProtect</button>
    </div>
  )
}
export default App;
