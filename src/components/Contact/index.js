import React from 'react';
import "./style.css";

const Contact = (props) => {
  return (
    <div className="contact p-4">
      <h3>Reach out to me</h3>
      <div>
        <p className="address">
        Bruce Harms<br/>
        37 Rosemont Ringoes Rd<br/>
        Ringoes, NJ  08551
        </p>
        <a href="mailto:bruceh_88@comcast.net">BruceH_88@comcast.net</a>
        <br />
        <a href="#">View Resume</a>
      </div>
    </div>
  )
}

export default Contact;