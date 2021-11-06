const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/REMOVE_TODO';

let maxId = 1;

const initialState = {
    items:[]
}


export const addTodo = (text)=>({type:ADD_TODO,text});
export const toggleTodo = (id) => ({type:TOGGLE_TODO});

export default function todos(state=initialState,action){
    switch (action.type){
        case ADD_TODO:
            state.items.push({id:maxId++,text:action.text,done:false});
            return {...state};
        case TOGGLE_TODO:
            return {...state, items:state.items.filter(item=>item.id===action.id ? {id:item.id,text:item.text,done:!item.done} : {...item})};
        default:
            return{...state}
    }
}