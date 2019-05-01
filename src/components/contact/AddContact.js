import React, { Component } from "react";
import uuidv4 from "uuid/v4";
import { Consumer } from "../../context";
import TextInputGroup from "../common/TextInputGroup";

class AddContact extends Component {
  state = {
    name: "",
    phone: "",
    email: "",
    errors: {},
  };

  handleSubmit = async (dispatch, e) => {
    e.preventDefault();
    const id = uuidv4();
    const { name, email, phone } = this.state;
    if (name === "") {
      await this.setState({ errors: { name: "Name is required" } });
      return;
    }
    if (email === "") {
      await this.setState({ errors: { email: "Email is required" } });
      return;
    }
    if (phone === "") {
      await this.setState({ errors: { phone: "Phone is required" } });
      return;
    }

    const newContact = { id, name, email, phone };
    dispatch({ type: "ADD_CONTACT", payload: newContact });
    alert("New contact added");
    this.setState({ name: "", phone: "", email: "", errors: {} });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, email, phone, errors } = this.state;
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
                    error={errors.name}
                  />
                  <TextInputGroup
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={this.handleChange}
                    label="Email"
                    error={errors.email}
                  />
                  <TextInputGroup
                    name="phone"
                    placeholder="Enter Phone"
                    value={phone}
                    onChange={this.handleChange}
                    label="Phone Number"
                    error={errors.phone}
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
