import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Contact from "./Contact";
import { GET_CONTACTS } from "../../actions/types";

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

const mapState2Props = state => ({
  contacts: state.contact.contacts,
});

const mapDispatchToProps = dispatch => ({
  getContacts: () => dispatch({ type: GET_CONTACTS }),
});

export default connect(
  mapState2Props,
  mapDispatchToProps,
)(Contacts);
