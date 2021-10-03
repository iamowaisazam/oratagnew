import { createStore,combineReducers,applyMiddleware } from "redux"
import  thunkMiddleware from 'redux-thunk'



//Reducers
import AuthReducer from './Reducer'

const rootReducers = combineReducers({
    AuthReducer
});
const store = createStore(rootReducers,applyMiddleware(thunkMiddleware));
   

// store.subscribe(() =>{
//     console.log('Updated State value',store.getState());
// })



export default store; 
