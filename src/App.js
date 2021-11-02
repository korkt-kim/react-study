import React,{useState,useEffect, useRef} from 'react';
import ReactDOM from 'react-dom'

const useScroll = () =>{
  const [state,setState] = useState({
    x:0,
    y:0
  });
  const onScroll = ({target}) =>{
    const {scrollTop,scrollLeft} = target;
    setState({
      x:scrollTop,
      y:scrollLeft
    })
  }
  return {state,onScroll}
}

function App() {
  const {state,onScroll} = useScroll();
  return (
    <div>
      <div  onScroll={onScroll} style={{overflow:"auto",height:"50px",width:'50px',display:'inline-block'}}>
        <p>asdf22222222222222222222222222222</p>
        <p>asdf2222222222222222222222222222</p>
        <p>asdf22222222222222222222222222</p>
      </div>
      <div>x:{state.x} y:{state.y}</div>
    </div>
  )
}
export default App;
