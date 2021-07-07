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
        <h1 class="title_heading pad-down">ADDITIONAL EXPERIENCE AND AWARDS</h1>
        <Container fluid style={{ padding: "5em" }}>
          <Row className="justify-content-md-center">
         <Col className ="pad-down"> 
         <Row><h5>HACKATONS</h5></Row>
           <Row><ul>
             <li><h6>Participated in 10+ hackathons Participant in MIT Hacking Medicine.</h6></li>
             <li><h6>Winner of Smart India Hackathon 2020</h6></li>
           <li><h6>Top 20 in Yale-CBIT Healthcare Hackathon</h6></li>
           </ul></Row>
        </Col>
        </Row>
       
        <Row style={{background:"#f5f5f5"}} className="justify-content-md-center pad-down">
         <Col className ="pad-down"> 
         <Row><h5>Research Paper Presentation - Real-time spontaneous abortion prediction and detection using IoT & ML</h5></Row>
           <Row><ul>
             <li><h6>Winner of International Centenary Technical Conference of Institute of Engineers India</h6></li>
             <li><h6>Best Presentation Award and Best Paper Award for presenting a paper at 9th ICRDET-2019</h6></li>
           </ul></Row>
        </Col>
        </Row>

        <Row className="justify-content-md-center">
         <Col className ="pad-down"> 
         <Row><h5>Paper Publication</h5></Row>
           <Row><ul>
             <li><h6>Published paper entitled Symptoms based disease prediction using decision tree and electronic health record analysis in European Journal of Molecular & Clinical Medicine – Scopus Indexed</h6></li>
           </ul></Row>
        </Col>
        </Row>

        <Row style={{background:"#f5f5f5"}} className="justify-content-md-center">
         <Col className ="pad-down"> 
         <Row><h5>Mentoring</h5></Row>
           <Row><ul>
             <li><h6>Mentored 50+ students by conducting counselor series on various self-improvement topics.</h6></li>
           </ul></Row>
        </Col>
        </Row>
        </Container>
        </div>
      </div>
    );
  }
}

export default About;
