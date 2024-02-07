import { combineReducers } from 'redux';
import themeReducer, {UPDATE_THEME} from './Theme';
import calculateReducer, {ADD_DIGIT, ADD_OPERATOR, DELETE_CHARACTER, RESET_EXPRESSION, EVALUATE_EXPRESSION, ADD_DECIMAL_POINT} from './Expression';

const rootReducer = combineReducers({
    theme : themeReducer,
    expression: calculateReducer,
})


export {UPDATE_THEME, ADD_DIGIT, ADD_OPERATOR, DELETE_CHARACTER, RESET_EXPRESSION, EVALUATE_EXPRESSION, ADD_DECIMAL_POINT};        //action creators
export default rootReducer;                                                                                     //root reducer