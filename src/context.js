import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload,
        ),
      };
    case "ADD_CONTACT":
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
class Provider extends Component {
  state = {
    contacts: [
      { id: 1, name: "Ola Ojo", email: "ojo@gmail.com", phone: "555-323-5555" },
      { id: 2, name: "Bonny", email: "bonny@gmail.com", phone: "222-555-6666" },
      { id: 3, name: "Tunde", email: "ojo@gmail.com", phone: "555-555-5555" },
      { id: 4, name: "Tawa", email: "Tawa@gmail.com", phone: "111-555-5555" },
      { id: 5, name: "Titi", email: "ojoo@gmail.com", phone: "555-343-5555" },
    ],
    dispatch: action => this.setState(state => reducer(state, action)),
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export { Provider };
export const Consumer = Context.Consumer;
