import React, { Component } from "react";
import uuidv4 from "uuid/v4";

class AddContact extends Component {
  state = {
    name: "",
    phone: "",
    email: "",
  };

  handleSubmit = e => {
    e.preventDefault();
    const id = uuidv4();
    const { name, email, phone } = this.state;
    const newContact = { id, name, email, phone };
    console.log(newContact);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-lg"
                placeholder="Enter Name"
                value={name}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="form-control form-control-lg"
                placeholder="Enter Email Address"
                value={email}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                name="phone"
                className="form-control form-control-lg"
                placeholder="Enter Phone Number"
                value={phone}
                onChange={this.handleChange}
              />
            </div>
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

export default AddContact;
