import { contacts } from "../components/contact/db";
import {
  GET_CONTACTS,
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
} from "../actions/types";

const initialState = { contacts };

const contactRecuder = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return { ...state };
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

    default:
      return state;
  }
};

export default contactRecuder;
