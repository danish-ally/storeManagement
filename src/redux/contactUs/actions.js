import axios from "axios";
import {
  REQ_START,
  GET_CONTACTUS_LIST,
  SUBMIT_CONTACTUS,
  CONTACTUS_SUCCESS,
  CONTACTUS_FAILURE,
} from "./actionTypes";
import Cookies from 'js-cookie'

export const req = () => {
  console.log("yo")
  return{type: REQ_START}
};

export const reqSuccess = (data) => ({
  type: CONTACTUS_SUCCESS,
  data,
});

export const reqFailure = (error) => ({
  type: CONTACTUS_FAILURE,
  error: error,
});

export const reqSuccessSubmitContact = () => ({
  type: SUBMIT_CONTACTUS,
});
export const reqSuccessGetContact = () => ({
  type: GET_CONTACTUS_LIST,
});

export const getAllContactUs = () => (dispatch) => {
  console.log("yo 34")
    dispatch(req());
      axios.get("http://localhost:3001/contact-us/all").then(response => {
        console.log("COMPLETE RESPONSE DATA: ", response.data);
      if (response.status) {
        dispatch(reqSuccess(response.data));
      } else {
        dispatch(reqFailure("Error getting broker List"));
        console.log("Something's not right! Please try again after some time.");
      }
      }).catch((err)=> {
        dispatch(reqFailure(err.message));
      })
  }


export const submitContactUs = (data) => {
  return async (dispatch) => {
    var token = Cookies.get("authToken");
    dispatch(req());
    console.log(`getting into action`);
    try {
      const response = await axios.post(
        "http://localhost:3001/contact-us/new",
        {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          subject: data.subject,
        }
      );
      if (response.status) {
        dispatch(reqSuccessSubmitContact());
        // swal("Success!", "New ContactUs Added Successfully!", "success");
      } else {
        dispatch(reqFailure(response.data.message));
      }
    } catch (err) {
      dispatch(reqFailure(err.message));
    }
  };
};
