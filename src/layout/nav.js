import React from "react";
import Button from "../components/button";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";

const Nav = () => {
  return (
    <Router>
      <div>
        <ul className="nav-list">
          <li className="logo">
            O - Book<b>.</b>
          </li>
          <li>
            <Link to="/">
              <Button btn="Home" />
            </Link>
          </li>
          <li>
            <Link to="/about">
              <Button btn="About" />
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <Button btn="Contact" />
            </Link>
          </li>
        </ul>
      </div>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/about">
        <AboutPage />
      </Route>
      <Route path="/contact">
        <ContactPage />
      </Route>
    </Router>
  );
};

export default Nav;
