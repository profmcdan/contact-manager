import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../context";

class Contacts extends Component {
  deleteContact = id => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(c => c.id !== id);
    this.setState({ contacts: newContacts });
  };

  componentDidMount() {
    // this.setState({ contacts });
  }
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              {contacts.map(c => (
                <Contact
                  key={c.id}
                  contact={c}
                  deleteClickHandler={() => this.deleteContact(c.id)}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
