import axios from "axios";

export const GET_DATE = "TODO/GET_DATE";
export const ADD_TASK = "TODO/ADD_TASK";
export const DELETE_TASK = "TODO/DELETE_TASK";

const endPoint = "https://60531f7945e4b30017290de9.mockapi.io/material";

const getDateHelper = (date) => ({
  type: GET_DATE,
  payload: date,
});

const addTaskHelper = (text) => ({
  type: ADD_TASK,
  payload: text,
});

const deleteTaskHelper = (id) => {
  console.log("IDDD", id);
  return {
    type: DELETE_TASK,
    payload: id,
  };
};

export const getDate = () => (dispatch) =>
  axios.get(endPoint).then((data) => {
    console.log(data);
    dispatch(getDateHelper(data.data));
  });

export const addTask = (text) => (dispatch) =>
  axios.post(endPoint, text).then(({ data }) => dispatch(addTaskHelper(data)));

export const deleteTask = (id) => (dispatch) =>
  axios.delete(`${endPoint}/${id}`).then((data) => {
    dispatch(deleteTaskHelper(data.data));
  });
