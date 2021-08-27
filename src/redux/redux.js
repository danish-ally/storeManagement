import {createStore, applyMiddleware} from 'redux';
import rootReducer from './RootReducer.js';
import thunk from 'redux-thunk';



const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;