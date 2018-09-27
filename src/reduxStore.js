import { createStore, applyMiddleware } from "redux";

//defTools
import { composeWithDevTools } from 'redux-devtools-extension';

//promises middleware
import promiseMiddleware from 'redux-promise-middleware'

//reducers
import rootReducer from "./reducers/index";

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(promiseMiddleware())));