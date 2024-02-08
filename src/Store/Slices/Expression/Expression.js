import { createSlice } from "@reduxjs/toolkit";
import InfixToPostfix from "./InfixToPostfix";
import EvaluatePostfix from "./EvaluatePostfix";

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
                exp[n] = action.payload;        //we replace the last operator with a new one
            else
                exp.push(action.payload);       //or we just push the new operator into the array

            state.expression = exp.join('');
        },
        ADD_DECIMAL_POINT(state) {
            let exp = state.expression.split('');

            if(!exp.length || exp[exp.length - 1].match(/[[+\-x\/]/g)){
                state.expression += '0.'
                return
            }
            if(!exp[exp.length - 1].match(/\d/)) return;

            for(let i = exp.length - 1; i >= 0; i--){
                if(exp[i] === '.')
                    return;
                if(exp[i].match(/[+\-x\/]/g) || i === 0){
                    exp.push('.');
                    state.expression = exp.join('');
                    break;
                }
            }
        },
        DELETE_CHARACTER(state){
            let exp = state.expression.split('');
            exp.pop();
            state.expression = exp.join('');
        },
        RESET_EXPRESSION(state){
            state.expression = '';
        },
        EVALUATE_EXPRESSION(state) {
            let n = state.expression.length - 1;
            if(!state.expression[n].match(/\d/)) {
                alert('Please complete the expression')
                return; 
            }
            let postfix = InfixToPostfix(state.expression);
            let result = EvaluatePostfix(postfix);
            if(result.includes('.'))                            //we round to 5 decimal places if we get a result with decimals
                state.expression =  Number(result).toFixed(5);
            else    
                state.expression = result;
        }
    }
})

export const {
        ADD_DIGIT, 
        ADD_OPERATOR, 
        DELETE_CHARACTER, 
        RESET_EXPRESSION, 
        EVALUATE_EXPRESSION, 
        ADD_DECIMAL_POINT} = expressionSlice.actions;
export default expressionSlice.reducer;

