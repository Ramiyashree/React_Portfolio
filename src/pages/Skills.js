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
        <h1 class="title_heading pad-down">Skills</h1>
          <Container fluid style={{ padding: "5em" }}>

         
        <Row className="justify-content-md-center pad-down">
         <Col className ="pad-down"> 
         <Row><h5>Web Development</h5></Row>
           <Row><ul>
           <li><h6>React</h6></li>
           <li><h6>Angular</h6></li>
           <li><h6>Node.js</h6></li>
           <li><h6>Express</h6></li>
           <li><h6>Apache</h6></li>
           <li><h6>HTML/CSS</h6></li>
           <li><h6>JavaScript</h6></li>
           <li><h6>Xampp</h6></li>
           <li><h6>PHP</h6></li>
           </ul></Row>
        </Col>
        <Col className ="pad-down"> 
         <Row><h5>Programming Languages</h5></Row>
           <Row><ul>
             <li><h6>Java</h6></li>
             <li><h6>JavaScript</h6></li>
             <li><h6>Python</h6></li>
             <li><h6>PHP</h6></li>
             <li><h6>C++</h6></li>
           </ul></Row>
        </Col>
        <Col className ="pad-down"> 
         <Row><h5>Mobile development</h5></Row>
           <Row><ul>
             <li><h6>Android Studio</h6></li>
           </ul></Row>
        </Col>
        </Row>
        


        <Row className="justify-content-md-center pad-down">
         <Col className ="pad-down"> 
         <Row><h5>Database</h5></Row>
           <Row><ul>
             <li><h6>MongoDB</h6></li>
             <li><h6>SQL(MySQL, SqLite)</h6></li>
             <li><h6>Firebase</h6></li>
           </ul></Row>
        </Col>
        <Col className ="pad-down"> 
         <Row><h5>Operating Systems</h5></Row>
           <Row><ul>
             <li><h6>Linux</h6></li>
             <li><h6>Windows</h6></li>
             <li><h6>MacOS</h6></li>
           </ul></Row>
        </Col>
        <Col className ="pad-down"> 
         <Row><h5>Internet of Things</h5></Row>
           <Row><ul>
             <li><h6>Arduino</h6></li>
             <li><h6>Sensors - Sound sensor, accelerometer, pulse rate</h6></li>
           </ul></Row>
        </Col>
        </Row>

        <Row className="justify-content-md-center pad-down">
         <Col className ="pad-down"> 
         <Row><h5>Machine Learning</h5></Row>
           <Row><ul>
             <li><h6>Scikit-learn</h6></li>
             <li><h6>Tensorflow</h6></li>
             <li><h6>Jupyter Notebook</h6></li>
           </ul></Row>
        </Col>
        <Col className ="pad-down"> 
         <Row><h5>Tools</h5></Row>
           <Row><ul>
             <li><h6>Git</h6></li>
             <li><h6>Jira</h6></li>
             <li><h6>Microsoft Office</h6></li>
           </ul></Row>
        </Col>
        <Col className ="pad-down"> 
         <Row><h5>IDE</h5></Row>
           <Row><ul>
             <li><h6>Visual Studio</h6></li>
             <li><h6>IntelliJ</h6></li>
             <li><h6>Eclipse</h6></li>
             <li><h6>Spyder</h6></li>
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
