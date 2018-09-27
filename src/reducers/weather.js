import {FETCH_WEATHER_FULFILLED} from '../actions/fetchWeatherAsyncAction';

export default (state = [], action) => {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case FETCH_WEATHER_FULFILLED:
      return [action.payload.data, ...state];
    default:
      return state;
  }
}