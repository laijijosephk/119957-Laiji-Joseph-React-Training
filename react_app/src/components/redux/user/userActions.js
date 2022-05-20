import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from "./userTypes";
import axios from "axios";

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};

export const fetchUserFailure = (err) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: err,
  };
};

// Thunk Middleware

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const users = res.data;
        dispatch(fetchUserSuccess(users));
      })
      .catch((error) => {
        const errMsg = error.message;
        dispatch(fetchUserFailure(errMsg));
      });
  };
};
