import React from "react";
import Row from "../layout/row";
import bg from "../img/home_jumbotron.png";
import "font-awesome/css/font-awesome.min.css";
const HomePage = () => {
  return (
    <div>
      <div className="jumbotron">
        <div className="left-jumbotron">
          <img src={bg} alt="logo" height="700px" width="700px" />
        </div>
        <div className="right-jumbotron">
          <hr width="60%"></hr>
          <h2 className="logo">O - Book </h2>
          <hr></hr>
          <i
            className="fa fa-book fa-5x"
            style={{ color: "dimgray", verticalAlign: "middle" }}
          ></i>
          <hr width="60%"></hr>
          <h2 className="logo">Reading Book Platform</h2>
        </div>
      </div>
      <Row />
    </div>
  );
};

export default HomePage;
