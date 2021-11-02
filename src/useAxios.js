import defaultAxios from 'axios';
import {useEffect, useState} from 'react'

const useAxios = (opts, axiosInstance = defaultAxios) =>{
    const [state,setState] = useState({
        loading:true,
        error:null,
        data:null,
    });
    const [trigger,setTrigger] = useState()
    if(!opts.url){
        return;
    }
    const refetch = () =>{
        setState({
            ...state,
            loading:false
        })
        setTrigger(Date.now());
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
        axiosInstance.request({...opts}).then((res)=>{
            console.log(res);
            setState({
                loading:false,
                error: res.error ,
                data:res.data
            })
        })
    },[trigger])
    return {...state, refetch};
    
}

export default useAxios;