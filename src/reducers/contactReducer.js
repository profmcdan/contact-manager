// import { contacts } from "../components/contact/db";
import {
  GET_CONTACTS,
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  GET_CONTACT,
} from "../actions/types";
import { ERROR } from "jest-validate/build/utils";

const initialState = { contacts: [], contact: {} };

const contactRecuder = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACT:
      return { ...state, contact: action.payload };
    case GET_CONTACTS:
      return { ...state, contacts: action.payload };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id ? action.payload : contact,
        ),
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload,
        ),
      };
    case ERROR:
      return {
        ...state,
        errors: action.payload,
      };

    default:
      return state;
  }
};

export default contactRecuder;
