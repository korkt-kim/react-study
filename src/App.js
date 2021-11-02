import React,{useState,useEffect, useRef} from 'react';
import ReactDOM from 'react-dom'

const useFadeIn = (duration) =>{
  const element = useRef();
  useEffect(()=>{
    if(element.current){
      element.current.style.transition = `opacity ease ${duration}s`
      element.current.style.opacity = 1
    }
  },[])
  
  return {ref:element,style:{opacity:0}};
}

function App() {
  const fadeInH1 = useFadeIn(3);
  const fadeInP = useFadeIn(10);
  return (
    <div  >
      <h1 {...fadeInH1}>asdifjoiasdjgioasjg</h1>
      <p {...fadeInP}>asdfasdf</p>
    </div>
  )
}
export default App;
