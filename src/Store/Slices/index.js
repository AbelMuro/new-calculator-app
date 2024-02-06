import { combineReducers } from 'redux';
import themeReducer, {UPDATE_THEME} from './Theme';
import calculateReducer, {ADD_DIGIT, ADD_OPERATOR, DELETE, RESET_EXPRESSION} from './Expression';

const rootReducer = combineReducers({
    theme : themeReducer,
    expression: calculateReducer,
})


export {UPDATE_THEME, ADD_DIGIT, ADD_OPERATOR, DELETE, RESET_EXPRESSION};                          //action creators
export default rootReducer;                     //root reducer