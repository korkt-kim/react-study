import {useState} from 'react';

const useInput = (initialValue,validator)=>{
  const [value,setValue] = useState(initialValue);
  const onChange = ({target:{value}}) =>{
    if(typeof validator ==='function' && validator(value)){
      setValue(value)
    }else{
      alert("must be numeric")
    }
  }
  return {value,onChange}
}

function App() {
  const myValidator = (str) => !isNaN(str)
  const name = useInput(1,myValidator)
  return (
   <input type ="text" {...name}/>
  );
}

export default App;
