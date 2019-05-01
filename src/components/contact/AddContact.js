import React, { Component } from "react";
import uuidv4 from "uuid/v4";
import { Consumer } from "../../context";
import TextInputGroup from "../common/TextInputGroup";

class AddContact extends Component {
  state = {
    name: "",
    phone: "",
    email: "",
  };

  handleSubmit = (dispatch, e) => {
    e.preventDefault();
    const id = uuidv4();
    const { name, email, phone } = this.state;
    const newContact = { id, name, email, phone };
    dispatch({ type: "ADD_CONTACT", payload: newContact });
    alert("New contact added");
    this.setState({ name: "", phone: "", email: "" });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, email, phone } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.handleSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.handleChange}
                    label="Name"
                  />
                  <TextInputGroup
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={this.handleChange}
                    label="Email"
                  />
                  <TextInputGroup
                    name="phone"
                    placeholder="Enter Phone"
                    value={phone}
                    onChange={this.handleChange}
                    label="Phone Number"
                  />
                  <button
                    type="submit"
                    className="btn btn-block btn-light btn-lg mr-auto"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
