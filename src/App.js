import React,{useState,useEffect, useRef} from 'react';
import ReactDOM from 'react-dom'
import Modal from './Modal.js'
import useModal from './useModal.js'
import './App.css';


function App() {
  const {isShowing, toggle} = useModal();
  return (
    <div>
      <button className="button-default" onClick={toggle}>Show Modal</button>
      <Modal
        isShowing={isShowing}
        hide={toggle}
      />
    </div>
  )
}
export default App;
