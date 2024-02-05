import { combineReducers } from 'redux';
import themeReducer, {UPDATE_THEME} from './Theme';
import calculateReducer, {UPDATE_OPERATOR, UPDATE_OPERAND_ONE, UPDATE_OPERAND_TWO} from './Calculate';

const rootReducer = combineReducers({
    theme : themeReducer,
    calculate: calculateReducer,
})


export {UPDATE_THEME, UPDATE_OPERATOR, UPDATE_OPERAND_ONE, UPDATE_OPERAND_TWO};                          //action creators
export default rootReducer;                     //root reducer