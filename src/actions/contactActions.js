import {
  GET_CONTACTS,
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
} from "./types";

export const getContacts = () => {
  return {
    type: GET_CONTACTS,
  };
};

export const addContact = payload => {
  return {
    type: ADD_CONTACT,
    payload,
  };
};

export const updateContact = payload => {
  return {
    type: UPDATE_CONTACT,
    payload,
  };
};

export const deleteContact = payload => {
  return {
    type: DELETE_CONTACT,
    payload,
  };
};
