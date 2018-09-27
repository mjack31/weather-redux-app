import {combineReducers} from "redux";
import weatherArr from './weather';

const rootReducer = combineReducers({
  weatherArr: weatherArr,
});

export default rootReducer;