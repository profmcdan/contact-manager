import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import { Consumer } from "../../context";
import TextInputGroup from "../common/TextInputGroup";
import axios from "axios";
import { addContact } from "../../actions/contactActions";

class AddContact extends Component {
  state = {
    name: "",
    phone: "",
    email: "",
    errors: {},
  };

  handleSubmit = async e => {
    e.preventDefault();
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

    const newContact = { name, email, phone };
    this.props.addContact(newContact);
    this.setState({ name: "", phone: "", email: "", errors: {} });
    this.props.history.push("/");
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
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
  }
}

AddContact.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default connect(
  null,
  { addContact },
)(AddContact);
