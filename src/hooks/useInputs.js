import {useState} from 'react';

const useInputs = (initialState) =>{
    const [value,setValue] = useState(initialState);
    const onChange = (e) =>{
        if(!e.target.value) return;
        setValue(e.target.value);
    }
    const reset = ()=>{
        setValue('');
    }
    return {value,onChange,reset};
}

export default useInputs