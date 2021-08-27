import {
  REQ,
  GET_LIST_SUCCESS,
  GET_LIST_FAILURE,
  UPDATE_FIELDS,
  STATE_CLEANUP,
} from "./actionTypes";

//Initial state///

const initialState = {
  error: "",
  inputValues: {
    broker: "",
    variety: "",
    IT: "",
    LEVERAGE: "",
    LTP: "",
    TRS: "",
    TS: "",
    exchange: "",
    orderType: "",
    perLotSize: "",
    productType: "",
    quantity: "",
    transactionType: "",
    funds: "",
    quantitypercentage: "",
    QuantityPercentage: "",
    triggerPrice: "",
    triggerPercentage: "",
    close: "",
    calputselection: "",
    nearBy: "",
    cal: "",
    plusMinus: "",
    limit: "",
    normal: "",
    stoplossordertype: "",
  },
  inputValidity: {
    broker: false,
    variety: false,
    IT: false,
    LEVERAGE: false,
    LTP: false,
    TRS: false,
    TS: false,
    exchange: false,
    orderType: false,
    perLotSize: false,
    productType: false,
    quantity: false,
    transactionType: false,
    funds: false,
    quantitypercentage: false,
    triggerPrice: false,
    triggerPercentage: false,
    close: false,
    calputselection: false,
    nearBy: false,
    cal: false,
    plusMinus: false,
    limit: "",
  },
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//? REDUCER FUNCTION.
const getSyntaxGeneratorReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQ: {
      console.log("Getting BrokerList Data");
      return { ...state };
    }
    case UPDATE_FIELDS: {
      const newInputValue = {
        ...state.inputValues,
        [action.fieldId]: action.val,
      };
      const newInputValidity = {
        ...state.inputValidity,
        [action.fieldId]: action.isValid,
      };

      return {
        ...state,
        inputValues: newInputValue,
        inputValidity: newInputValidity,
        // finalFormState: newFinalFormState,
      };
    }

    case GET_LIST_SUCCESS: {
      console.log("Successfully Got List");
      return {
        ...state,
        data: action.data,
        error: "",
      };
    }

    case GET_LIST_FAILURE: {
      return {
        ...state,
        data: [],
        error: action.error,
      };
    }
    case STATE_CLEANUP: {
      console.log("Cleaning state");
      return initialState;
    }
    default:
      return state;
  }
};

export default getSyntaxGeneratorReducer;
