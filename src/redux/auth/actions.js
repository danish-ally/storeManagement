
import axios from 'axios'
import {REQ, REQ_SUCCESS, REQ_FAILURE, LOGOUT} from './actionTypes';
import Cookies from 'js-cookie'
export const req = () => ({
    type: REQ,
  });
  
  export const reqSuccess = (userId, userToken) => ({
    type: REQ_SUCCESS,
    userId: userId,
    userToken: userToken,
  });

  export const reqFailure = (error) => ({
    type: REQ_FAILURE,
    error: error,
  });
  


export const logout = () => ({type: LOGOUT});
  

export const logUserIn = (loginData) => {
    return async (dispatch) => {
    //  dispatch(req());
      console.log('login works');
      console.log(loginData)
      try {
        const response = await axios.post('http://localhost:3001/api/login', {
          email: loginData.email,
          password: loginData.password,
        });
        console.log('COMPLETE RESPONSE DATA: ', response.status);
  
        if (response.status) {
          Cookies.set('authToken', response.data.token)
          Cookies.set('name', response.data.name)
          dispatch(
            reqSuccess(
              response.data.name,
              response.data.token,
            ),
          );
        } else {
          dispatch(reqFailure('Invalid login credentials! Please try again.'));
          // console.log('saving to async storage');
          // //? SAVING USER DATA TO ASYNC STORAGE ON SUCCESSFUL LOGIN.
          // const userData = JSON.stringify({
          //   userToken: response.data.token,
          // });
          // // await AsyncStorage.setItem('redBankAuthObj', userData);
          // console.log('Saved data to async storage!');
  
          
        }
      } catch (err) {
        console.log(err.message);
        if (err.message.includes('401')) {
          dispatch(reqFailure('Invalid credentials!'));
          console.log('Invalid credentials!')

        } else if(err.message.includes('404')) {
         dispatch(reqFailure("User Not Found"));
          console.log(err.message)
        } else {
          dispatch(reqFailure(err.message))
        }
      }
    };
  };

  export const logUserOut = () => {
    console.log('logging out');
    return async (dispatch) => {
      dispatch(req());
      
        dispatch(logout());
        
    };
  };
  