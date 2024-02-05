import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    operandOne: '',
    operandTwo: '',
    operator: '',
}

const calculateSlice = createSlice({
    name: 'calculate',
    initialState,
    reducers: {
        UPDATE_OPERATOR(state, action) {
            state.operator = action.payload;
        },
        UPDATE_OPERAND_ONE(state, action){
            state.operandOne = action.payload;
        },
        UPDATE_OPERAND_TWO(state, action){
            state.operandTwo = action.payload;
        }
    }
})

export const {UPDATE_OPERATOR, UPDATE_OPERAND_ONE, UPDATE_OPERAND_TWO} = calculateSlice.actions;
export default calculateSlice.reducer;

