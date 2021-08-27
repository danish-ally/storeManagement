import axios from "axios";
import { REQ_START, GET_LIST_SUCCESS, GET_LIST_FAILURE } from "./actionTypes";

export const req = () => ({
  type: REQ_START,
});

export const reqSuccess = (data) => ({
  type: GET_LIST_SUCCESS,
  data,
});

export const reqFailure = (error) => ({
  type: GET_LIST_FAILURE,
  error: error,
});

export const getBrokerSymbolList = () => {
  return async (dispatch) => {
    dispatch(req())
    try {
      const response = await axios.get(
        "https://margincalculator.angelbroking.com/OpenAPI_File/files/OpenAPIScripMaster.json"
      );
      console.log("COMPLETE RESPONSE DATA: ", response.data);

      if (response.status) {
        dispatch(reqSuccess(response.data));
      } else {
        dispatch(reqFailure("Error getting broker List"));
        console.log("Something's not right! Please try again after some time.");
      }
    } catch (err) {
      dispatch(reqFailure(err.message));
    }
  };
};

