import {useReducer,useEffect} from 'react';


const initialState = {
    loading:false,
    data:null,
    error:null,
}


const reducer = (state,action) =>{
    switch (action.type){
        case 'LOADING':
            return {...state,loading:true}
        case 'SUCCESS':
            return {...state,data:action.data,loading:false}
        case 'ERROR':
            return{...state,error:action.error,loading:true}
        default:
            return {...state}
    }
}



const useAsync = (callback) =>{
    const [state,dispatch] = useReducer(reducer,initialState);
    const fetchData = async () =>{
        dispatch({type:'LOADING'});
        try{
            const data = await callback();
            dispatch({type:'SUCCESS',data});
        }catch(e){
            dispatch({type:'ERROR',error:e})
        }
    }
    useEffect(() => {
        fetchData();
        // eslint 설정을 다음 줄에서만 비활성화
        // eslint-disable-next-line
    }, []);
    return [state,fetchData]
}

export default useAsync