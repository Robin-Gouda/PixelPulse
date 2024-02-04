import * as AuthApi from "../API/AuthRequest.js";

export const login = (formData) => async (dispatch) => {
  //  reducer with action
  dispatch({ type: "AUTH_START" });
  //   Api
  try {
    const { data } = await AuthApi.logIn(formData);
    dispatch({ type: "AUTH_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAIL" });
  }
};

export const signUp = (formData) => async (dispatch) => {
  //  reducer with action
  dispatch({ type: "AUTH_START" });
  //   Api
  try {
    const { data } = await AuthApi.signUp(formData);
    dispatch({ type: "AUTH_SUCCESS", data: data });
  } catch (error) {
    // console.log(error);
    dispatch({ type: "AUTH_FAIL" });
  }
};
