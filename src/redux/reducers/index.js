
import { AUTH_LOGIN, SAVE_PLATE, SELECTED_INFO } from '../actions/types';

const mainReducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        ...state,
       user:action.payload 
      }
    case SELECTED_INFO:
      return{
        ...state,
        selectedInfo: action.payload
      }
    case SAVE_PLATE:
      return {
        ...state,
         platesSaved: action.payload
      }
    default:
      return state
  }
}


export default mainReducer;