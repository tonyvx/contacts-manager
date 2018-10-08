import React from "react";
import PropTypes from "prop-types";
import "./Contact.css";

function Contact(props) {
  return (
    <div className="contact">
    <span>{props.name.id} {props.name.name}</span><br/>
      <span>{props.name.address.street}</span><br/>
      <span>{props.name.address.suite}</span><br/>
      <span>{props.name.address.city} {props.name.address.zipcode}</span>
    </div>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired
};

export default Contact;
