import React from "react";
import { FaReact, FaCss3Alt, FaHtml5, FaFontAwesome } from "react-icons/fa";
import { IconContext } from "react-icons";

const AboutPage = () => {
  return (
    <div className="row logo">
      <h1>About</h1>
      <hr></hr>
      <p>This website is made by Zahro Nurrobby Ashari to fulfill a task.</p>
      <hr></hr>
      <p>The tools used to make this website is :</p>
      <ul className="tools">
        <IconContext.Provider value={{ size: "2em" }}>
          <li>
            <FaReact />
          </li>
          <li>
            <FaCss3Alt />
          </li>
          <li>
            <FaHtml5 />
          </li>
          <li>
            <FaFontAwesome />
          </li>
        </IconContext.Provider>
      </ul>
      <ul className="tools">
        <li>GoogleBooks API</li>
      </ul>
      <hr></hr>
    </div>
  );
};

export default AboutPage;
