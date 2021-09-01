import { REQ_START, GET_CONTACTUS_LIST, SUBMIT_CONTACTUS, CONTACTUS_SUCCESS, CONTACTUS_FAILURE} from "./actionTypes";

//Initial state///

const initialState = {
  
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    data: [],
    loading:false,
    error: "",
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//? REDUCER FUNCTION.
const contactUsReducer = (state = initialState, action) => {
  console.log("fired")
  switch (action.type) {
    case REQ_START: {
      console.log("Getting BrokerList Data");
      return { ...state, loading: true, data: [],
        error: "",};
    }

    case CONTACTUS_SUCCESS: {
      console.log("Successfully Got List2")
      console.log(action.data);
      return {
        ...state,
        data: action.data,
        error: "",
        loading:false,
      };
    }

    case CONTACTUS_FAILURE: {
      return {
        ...state,
        data : [],
        error: action.error,
        loading:false
      };
    }
    case SUBMIT_CONTACTUS: {
      return {
        ...state,
        error: action.error,
        loading:false
      };
    }
    default:
      return state;
  }
};

export default contactUsReducer;
