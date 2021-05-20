import React from "react";

const ContactPage = () => {
  return (
    <div className="row logo">
      <h1>Contact Us</h1>
      <hr></hr>
      <form className="form-wrapper">
        <div>
          <input type="text" placeholder="Name"></input>
        </div>
        <div>
          <input type="text" placeholder="Email"></input>
        </div>
        <div>
          <input type="textarea" placeholder="Message"></input>
        </div>
        <div>
          <button type="submit" className="logo">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
