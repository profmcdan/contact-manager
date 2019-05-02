import {
  GET_CONTACTS,
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  ERRORS,
  GET_CONTACT,
} from "./types";
import axios from "axios";

export const getContacts = () => async dispatch => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    dispatch({ type: GET_CONTACTS, payload: res.data });
  } catch (error) {
    dispatch({
      type: ERRORS,
      payload: { message: "There may be a network error", error: error },
    });
  }
};

export const getContact = id => async dispatch => {
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    );
    dispatch({ type: GET_CONTACT, payload: data });
  } catch (error) {
    dispatch({
      type: ERRORS,
      payload: { message: "There may be a network error", error: error },
    });
  }
};

export const addContact = contact => async dispatch => {
  try {
    const { data } = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      contact,
    );
    dispatch({ type: ADD_CONTACT, payload: data });
  } catch (error) {
    dispatch({
      type: ERRORS,
      payload: { message: "There may be a network error", error: error },
    });
  }
};

export const updateContact = (id, contactInfo) => async dispatch => {
  try {
    const { data } = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      contactInfo,
    );
    dispatch({ type: UPDATE_CONTACT, payload: data });
  } catch (error) {
    dispatch({
      type: ERRORS,
      payload: { message: "There may be a network error", error: error },
    });
  }
};

export const deleteContact = id => async dispatch => {
  try {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({ type: DELETE_CONTACT, payload: id });
  } catch (error) {
    dispatch({
      type: ERRORS,
      payload: { message: "There may be a network error", error: error },
    });
  }
};
