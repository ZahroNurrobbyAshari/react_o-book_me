import React from "react";
import "font-awesome/css/font-awesome.min.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer logo">
        <div className="frame">
          <a href="#" className="btn-footer">
            <i className="fa fa-facebook-f" style={{ color: "#3b5998" }}></i>
          </a>
          <a href="#" className="btn-footer">
            <i className="fa fa-twitter" style={{ color: "#00acee" }}></i>
          </a>
          <a
            href="https://github.com/ZahroNurrobbyAshari/react_o-book_me"
            className="btn-footer"
          >
            <i className="fa fa-github"></i>
          </a>
          <a href="https://www.instagram.com/robbyash/" className="btn-footer">
            <i className="fa fa-instagram" style={{ color: "#0e76a8" }}></i>
          </a>
          <a href="#" className="btn-footer">
            <i className="fa fa-whatsapp" style={{ color: "#47D15E" }}></i>
          </a>
          <a
            href="https://mail.google.com/mail/u/0/?fs=1&to=zahronurrobbya@gmail.com&su=SUBJECT&body=BODY&tf=cm"
            className="btn-footer"
          >
            <i className="fa fa-envelope"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
