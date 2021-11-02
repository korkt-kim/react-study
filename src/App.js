import React,{useState,useEffect, useRef} from 'react';
import ReactDOM from 'react-dom'


const useConfirm = (message="", onConfirm, onReject) =>{
  if(typeof onConfirm !=='function'){
    return;
  }
  const confirmAction = () =>{
    // eslint-disable-next-line no-restricted-globals
    if(confirm(message)){
      onConfirm();
    }else{
      onReject();
    }
  }
  return confirmAction;
}

function App() {
  const deleteWorld = () => console.log('deleting the world')
  
  const abort = () => console.log('Aborted');
  const confirmDelete = useConfirm("Are you sure?",deleteWorld,abort);
  return (
    <div >
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  )
}
export default App;
