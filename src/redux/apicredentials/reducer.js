import {
  REQ,
  REQ_SUCCESS,
  REQ_FAILURE,
  REQ_SUCCESS_NEW_CRED,
  DELETE_CREDENTIAL,
} from "./actionTypes";

//Initial state///

const initialState = {
  loading: false,
  myCredentials: [],
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//? REDUCER FUNCTION.
const apiCredentailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQ: {
      return { ...state, loading: true };
    }

    case REQ_SUCCESS: {
      console.log(action.array);
      return {
        ...state,
        loading: false,
        myCredentials: action.array,
        error: "",
      };
    }

    case REQ_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.error,
        myCredentials: [],
      };
    }

    case REQ_SUCCESS_NEW_CRED: {
      console.log("successfully added new credentials");
      return {
        ...state,
        loading: false,
        error: "",
      };
    }
    case DELETE_CREDENTIAL: {
      const newState = { ...state, loading: false };
      const nState = { ...state, loading: false };
      if (newState.myCredentials.find((val) => val.id === action.credential)) {
        nState.myCredentials.pop(action.credential);
      }

      return {
        ...state,
        loading: false,
        myCredentials: nState.myCredentials,
        error: "",
      };
    }
    default:
      return state;
  }
};

export default apiCredentailsReducer;
