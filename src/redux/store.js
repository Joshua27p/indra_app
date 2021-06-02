import { createStore } from 'redux';
import reducer from './reducers'

const initialState = { 
  user: {},
  selectedInfo : {}, 
}


export const store = createStore(
  reducer,initialState, window.__REDUX_DEVTOOLS_EXTENSIONS__ && window.__REDUX_DEVTOOLS_EXTENSION_()
)