import {useState,useEffect, useRef} from 'react';

const useClick = (onClick) =>{
  const element = useRef();
  useEffect(()=>{
    if(element.current){
      element.current.addEventListener('click',onClick)
    }
  })
  return element;
  
}

function App() {
  const sayHello = () => console.log('say Hello')
  const title = useClick(sayHello)

  return (
    <div >
      <h1 ref={title}>Hi</h1>
    </div>
  )
}
export default App;
