import { contacts } from "../components/contact/db";
import { GET_CONTACTS } from "../actions/types";

const initialState = { contacts };

const contactRecuder = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return { ...state };

    default:
      return state;
  }
};

export default contactRecuder;
