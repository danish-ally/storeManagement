import { REQ_START, GET_LIST_SUCCESS, GET_LIST_FAILURE} from "./actionTypes";

//Initial state///

const initialState = {
  
  data: [],
  error: "",
  loading:false,
  loaded:false
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//? REDUCER FUNCTION.
const getSymbolGeneratorReduced = (state = initialState, action) => {
  switch (action.type) {
    case REQ_START: {
      console.log("Getting BrokerList Data");
      return { ...state, loading: true};
    }

    case GET_LIST_SUCCESS: {
      console.log("Successfully Got List")
      return {
        ...state,
        data: action.data,
        error: "",
        loading:false,
        loaded:true
      };
    }

    case GET_LIST_FAILURE: {
      return {
        ...state,
        data : [],
        error: action.error,
        loading:false
      };
    }
    default:
      return state;
  }
};

export default getSymbolGeneratorReduced;
