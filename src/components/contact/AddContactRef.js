import React, { Component } from "react";
import uuidv4 from "uuid/v4";

class AddContactRef extends Component {
  constructor(props) {
    super(props);

    this.nameInput = React.createRef();
    this.phoneInput = React.createRef();
    this.emailInput = React.createRef();
  }

  static defaultProps = {
    name: "John Doe",
    email: "doe@gmail.com",
    phone: "555-555-5555",
  };

  handleSubmit = e => {
    e.preventDefault();
    const id = uuidv4();
    const newContact = {
      id,
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value,
    };
    console.log(newContact);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, email, phone } = this.props;
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
                defaultValue={name}
                ref={this.nameInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="form-control form-control-lg"
                placeholder="Enter Email Address"
                defaultValue={email}
                ref={this.emailInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                name="phone"
                className="form-control form-control-lg"
                placeholder="Enter Phone Number"
                defaultValue={phone}
                ref={this.phoneInput}
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

export default AddContactRef;
