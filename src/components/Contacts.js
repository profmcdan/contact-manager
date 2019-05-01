import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../context";

class Contacts extends Component {
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
                <Contact key={c.id} contact={c} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
