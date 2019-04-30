import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [],
  };

  deleteContact = id => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(c => c.id !== id);
    this.setState({ contacts: newContacts });
  };

  componentDidMount() {
    const contacts = [
      { id: 1, name: "Ola Ojo", email: "ojo@gmail.com", phone: "555-323-5555" },
      { id: 2, name: "Bonny", email: "bonny@gmail.com", phone: "222-555-6666" },
      { id: 3, name: "Tunde", email: "ojo@gmail.com", phone: "555-555-5555" },
      { id: 4, name: "Tawa", email: "Tawa@gmail.com", phone: "111-555-5555" },
      {
        id: 5,
        name: "Titi",
        email: "ojTawao@gmail.com",
        phone: "555-343-5555",
      },
    ];
    this.setState({ contacts });
  }
  render() {
    const { contacts } = this.state;
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
  }
}

export default Contacts;
