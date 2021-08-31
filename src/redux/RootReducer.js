import {combineReducers} from 'redux'
import apiCredentailsReducer from './apicredentials/reducer';
import authReducer from './auth/reducer'
import getBrokerListReducer from './submbolgenerator/reducer';
import getSyntaxGeneratorReducer from './syntaxgenerator/reducer';
import sidebarReducer from './sidebar/sidebarReducer'
import contactUsReducer from './contactUs/reducer';


const rootReducer = combineReducers({
    authState: authReducer,
    brokerListState: getBrokerListReducer,
    syntaxGeneratorState:getSyntaxGeneratorReducer,
    apiCredentialsState: apiCredentailsReducer,
    sidebarState : sidebarReducer,
    contactUsState : contactUsReducer
});

export default rootReducer;