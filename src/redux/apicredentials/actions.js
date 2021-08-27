import axios from "axios";
import {
  REQ,
  REQ_SUCCESS,
  REQ_FAILURE,
  REQ_SUCCESS_NEW_CRED,
  DELETE_CREDENTIAL,
} from "./actionTypes";
import Cookies from "js-cookie";
import swal from "sweetalert";

export const req = () => ({
  type: REQ,
});

export const reqSuccess = (array) => ({
  type: REQ_SUCCESS,
  array: array,
});

export const reqFailure = (error) => ({
  type: REQ_FAILURE,
  error: error,
});

export const reqSuccessNewCred = () => ({
  type: REQ_SUCCESS_NEW_CRED,
});

export const reqDeleteCredential = (credential) => ({
  type: DELETE_CREDENTIAL,
  credential: credential,
});

export const getAllCredentials = () => {
  return async (dispatch) => {
    var token = Cookies.get("authToken");
    // dispatch(req);
    console.log("gettingmycredentials");
    try {
      const response = await axios.post(
        "http://localhost:3001/credential/all",
        {
          token: token,
        }
      );
      if (response.status) {
        dispatch(reqSuccess(response.data));
      } else {
        dispatch(reqFailure(response.data.message));
      }
    } catch (err) {
      dispatch(reqFailure(err.message));
    }
  };
};
export const deleteCredentials = (credential) => {
  return async (dispatch) => {
    var token = Cookies.get("authToken");
    // dispatch(req());
    console.log("deletingcredentials");
    console.log(token);
    console.log(credential);
    try {
      const response = await axios.delete(
        "http://localhost:3001/credential/delete",
        {
          data: {
            id: token,
            key: credential,
          },
        }
      );
      if (response.status == 202) {
        dispatch(reqDeleteCredential(credential));
        dispatch(getAllCredentials());
      } else {
        dispatch(reqFailure(response.data.message));
      }
    } catch (err) {
      dispatch(reqFailure(err.message));
      console.log(err.message);
    }
  };
};

export const submitNewCredentials = (formData) => {
  return async (dispatch) => {
    var token = Cookies.get("authToken");
    // dispatch(req());
    try {
      const response = await axios.post(
        "http://localhost:3001/credential/new",
        {
          name: formData.appName,
          apiKey: formData.apiKey,
          sKey: formData.secretKey,
          id: token,
        }
      );
      if (response.status) {
        dispatch(reqSuccessNewCred());
        swal("Success!", "New Credential Added Successfully!", "success");
      } else {
        dispatch(reqFailure(response.data.message));
      }
    } catch (err) {
      dispatch(reqFailure(err.message));
    }
  };
};
