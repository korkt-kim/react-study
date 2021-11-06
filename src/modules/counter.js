const SET_DIFF = 'counter/SET_DIFF';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const setDiff = diff => ({type:SET_DIFF,diff});
export const increase = () => ({type:INCREASE});
export const decrease = () => ({type:DECREASE});

const initialState={
    count:0,
    diff:1,
}

export default function counter(state=initialState,action){
    switch (action.type){
        case INCREASE:
            return {...state,count:state.count+state.diff}
        case SET_DIFF:
            return {...state,diff:action.diff}
        case DECREASE:
            return {...state,count:state.count-state.diff}
        default :
            return {...state};
    }
}

