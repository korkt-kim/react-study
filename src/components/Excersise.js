import React,{useEffect} from 'react'
import {connect,useDispatch} from 'react-redux'
import {increase,setDiff,decrease} from '../modules/counter';
import {addTodo,toggleTodo} from '../modules/todos';



function Excersise(props) {
    const dispatch = useDispatch();
    const{count,diff,todos,increase,setDiff,decrease,addTodo,toggleTodo} = props;
    console.log(props)
    return (
        <div>
            {count}
            <button onClick={()=>increase()}>+</button>
            <button onClick={()=>decrease()}>-</button>
            {/* <p>{store.getState().text}</p> */}
            {/* <input type="text" onChange={(e)=>store.dispatch({type:'CHANGE_TEXT',text:e.target.value})} value={store.getState().text}></input> */}
        </div>
    )
}

export default connect(state=>({
    count: state.counter.count,
    diff:state.counter.diff,
    todos:state.todos.items,
}),{
    increase,
    setDiff,
    decrease,
    addTodo,
    toggleTodo,
})(Excersise);
