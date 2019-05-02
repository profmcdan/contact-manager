import React, { Component } from "react";
// import { Consumer } from "../../context";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateContact } from "../../actions/contactActions";
import TextInputGroup from "../common/TextInputGroup";
import axios from "axios";

class EditContact extends Component {
  state = {
    id: null,
    name: "",
    phone: "",
    email: "",
    errors: {},
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`,
      );
      const contact = data;
      this.setState({
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        id: contact.id,
      });
    } catch (error) {
      console.log(error);
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { name, email, phone, id } = this.state;
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

    const updateContact = { name, email, phone };
    try {
      const { data } = await axios.put(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        updateContact,
      );
      console.log(data);
      this.props.updateContact(data);
      this.setState({ name: "", phone: "", email: "", errors: {} });
      this.props.history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Edit Contact</div>
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
              Update Contact
            </button>
          </form>
        </div>
      </div>
    );
  }
}

EditContact.propTypes = {
  updateContact: PropTypes.func.isRequired,
};

export default connect(
  null,
  { updateContact },
)(EditContact);
