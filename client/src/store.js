import {combineReducers,createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {composeWithDevTools} from 'redux-devtools-extension' 
import { getAllPizzasReducers } from './reducers/pizzasReduces';
import { cartReducers } from './reducers/cartReducers';
import { registerUserReducer,loginUserReducer } from './reducers/userReducer';
import { placeOrderReducer } from './reducers/orderReducer';
const finalReducers = combineReducers({
    getAllPizzasReducers: getAllPizzasReducers, 
    cartReducers:cartReducers,
    registerUserReducer:registerUserReducer,
    loginUserReducer:loginUserReducer,
    placeOrderReducer: placeOrderReducer
    
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')):[];
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')):null

const initialState = {
    cartReducers:{
    cartItems:cartItems
    },
    loginUserReducer:{
     currentUser:currentUser
    }
}
const composeEnhances = composeWithDevTools({})
const store = createStore(finalReducers,initialState,composeEnhances(applyMiddleware(thunk)))
export default store;