import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Contact from "./Contact";
import { getContacts } from "../../actions/contactActions";
// import { Consumer } from "../../context";

class Contacts extends Component {
  componentDidMount() {
    this.props.getContacts();
    // this.setState({ contacts });
  }

  render() {
    const { contacts } = this.props;

    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map(c => (
          <Contact key={c.id} contact={c} />
        ))}
      </React.Fragment>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: state.contact.contacts,
});

export default connect(
  mapStateToProps,
  { getContacts },
)(Contacts);
