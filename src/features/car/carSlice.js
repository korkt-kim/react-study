import {createSlice} from "@reduxjs/toolkit"
//공부 reduxjs/toolkit

const initialState = {
    cars: ["Model S","Model 3","Model X", "Model Y"],
}

const carSlice = createSlice({
    name:"car",
    initialState,
    reducers:{} 
})

export const selectCars = state=>state.car.cars // initialState의 cars에 매핑됨

export default carSlice.reducer
