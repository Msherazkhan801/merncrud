import {AUTH, } from './Constant';

import * as api from '../../API/API';
import {  toast } from "react-toastify";


export const signin = (formData,navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    // console.log(data,"<data");
    dispatch({ type: AUTH, data }); 
    toast.success("Successfully SignUp")
    navigate("/")
  } catch (error) {
    console.log(error);
    toast.info(`Somthing Wrong ${error}`)

  }
};

export const signup = (formData,navigate) => async (dispatch) => {
  try{
        const { data } = await api.signUp(formData);
        // console.log(formData,"<formData");
    dispatch({ type: AUTH, data });
    toast.success("Successfully SignUp")
    navigate("/")
  } catch (error) {
    console.log(error);
    toast.info(`Somthing Wrong ${error}`)


    
  };
}


