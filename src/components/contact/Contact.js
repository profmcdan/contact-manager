import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import { Consumer } from "../../context";
import axios from "axios";
import { deleteContact } from "../../actions/contactActions";

class Contact extends Component {
  state = {
    showContactInfo: false,
  };

  onShowClick = id => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  onDeleteClick = async id => {
    const { deleteContact } = this.props;
    try {
      axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      deleteContact(id);
    } catch (error) {
      console.log("An error occred");
    }
  };

  render() {
    const { name, email, phone, id } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{" "}
          <i
            onClick={() => this.onShowClick(id)}
            className="fas fa-sort-down"
            style={{ cursor: "pointer" }}
          />
          <i
            onClick={() => this.onDeleteClick(id)}
            className="fas fa-trash"
            style={{ cursor: "pointer", float: "right", color: "red" }}
          />
          <Link to={`/edit/${id}`}>
            <i
              className="fas fa-pencil-alt"
              style={{
                cursor: "pointer",
                float: "right",
                color: "black",
                marginRight: "1em",
              }}
            />
          </Link>
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default connect(
  null,
  { deleteContact },
)(Contact);
