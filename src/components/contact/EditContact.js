import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../common/TextInputGroup";
import Axios from "axios";

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
      const { data } = await Axios.get(
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

  handleSubmit = async (dispatch, e) => {
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
    Axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updateContact)
      .then(res => {
        dispatch({ type: "UPDATE_CONTACT", payload: res.data });
        this.setState({ name: "", phone: "", email: "", errors: {} });
        this.props.history.push("/");
      })
      .catch(error => {
        console.log(error);
      });
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
              <div className="card-header">Edit Contact</div>
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
                    Update Contact
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

export default EditContact;
