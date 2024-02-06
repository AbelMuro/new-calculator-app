import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    expression: ''
}

const expressionSlice = createSlice({
    name: 'expression',
    initialState,
    reducers: {
        ADD_DIGIT(state, action) {
            state.expression += action.payload;
        },
        ADD_OPERATOR(state, action){
            let exp = state.expression.split('');   
            if(exp.length === 0) return;
            let n = exp.length - 1;

            if(!exp[n].match(/\d/))             //if last char is NOT a digit
                exp[n] = action.payload;
            else
                exp.push(action.payload);

            state.expression = exp.join('');
        },
        DELETE(state){
            let exp = state.expression.split('');
            exp.pop();
            state.expression = exp.join('');
        },
        RESET_EXPRESSION(state){
            state.expression = '';
        }
    }
})

export const {ADD_DIGIT, ADD_OPERATOR, DELETE, RESET_EXPRESSION} = expressionSlice.actions;
export default expressionSlice.reducer;

