import {combineReducers} from 'redux'
import apiCredentailsReducer from './apicredentials/reducer';
import authReducer from './auth/reducer'
import getBrokerListReducer from './submbolgenerator/reducer';
import getSyntaxGeneratorReducer from './syntaxgenerator/reducer';
import sidebarReducer from './sidebar/sidebarReducer'

const rootReducer = combineReducers({
    authState: authReducer,
    brokerListState: getBrokerListReducer,
    syntaxGeneratorState:getSyntaxGeneratorReducer,
    apiCredentialsState: apiCredentailsReducer,
    sidebarState : sidebarReducer
});

export default rootReducer;