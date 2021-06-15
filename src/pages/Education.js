import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faGlobe } from "@fortawesome/free-solid-svg-icons";
import AULogo from "../img/auBE.png";
import UICLogo from "../img/uic.png";

class About extends React.Component {
  render() {
    return (
    <div className="primary outer-structure" style={{ display: "flex", flexDirection: "column"}}>
        <div className="inner-structure center" style={{ flexDirection: "column" }}>
        <h1 class="title_heading pad-down">EDUCATION</h1>
          <Container fluid style={{ padding: "5em" }}>
          <Row className="justify-content-md-center">
         <Col  xs lg="2"><picture><img className="header-img" src={UICLogo} alt="header" fluid /></picture></Col>
         <Col className ="pad-down"> 
         <Row><h5>University of Illinois at ChiFcago, January 2021 - December 2022</h5></Row>
           <Row><h6>Master of Science - MS in Computer Science</h6></Row>
           <Row><h6>Computer Algorithms, Software development for mobile platforms, Introduction to machine learning</h6></Row></Col>
        </Row>
<br></br>
        <Row className="justify-content-md-center">
        <Col xs lg="2"><picture><img className="header-img" src={AULogo} alt="header" fluid /></picture></Col>
         <Col> 
         <Row className ="pad-down"><h5>Anna University(RMK Engineering College), July 2016 - August 2020</h5></Row>
           <Row><h6>Bachelor of Engineering (BE) in Computer Science and Engineering</h6></Row>
           <Row><h6>Coursework: Unix and Shell Programming, Data Structures, Object Oriented Design and Programming, Electronic Circuits, Login Design, Design and analysis of Algorithms, Graph Theory, Software Engineering, Database Management Systems, Computer Networks, Compiler Design, Management and Entrepreneurship, Advanced Computer Architecture, Operating Systems, Java Programming, C# .Net, Computer Graphics and Visualisation, Microprocessors
</h6></Row></Col>
        </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default About;