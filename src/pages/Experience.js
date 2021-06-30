import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faGlobe } from "@fortawesome/free-solid-svg-icons";
import AULogo from "../img/auBE.png";
import UICLogo from "../img/uic.png";
import EALogo from "../img/ea.jpg";


class About extends React.Component {
  render() {
    return (
    <div className="primary outer-structure" style={{ display: "flex", flexDirection: "column"}}>
        <div className="inner-structure center" style={{ flexDirection: "column" }}>
        <h1 class="title_heading pad-down pad-down">EXPERIENCE</h1>

        <Container fluid style={{ padding: "5em" }}>
          <Row className="justify-content-md-center">
         <Col  xs lg="2"><picture><img className="header-img" src={UICLogo} alt="header" fluid /></picture></Col>
         <Col className ="pad-down"> 
         <Row><h5>Graduate Assistant at University of Illinois at Chicago, April 2020 - Present</h5></Row>
           <Row><ul>
             <li><h6><a href="https://acer.uic.edu/">Advanced Cyberinfrastructure for Education and Research</a> (ACER) provides 500+ researchers computational resources and data-related services</h6></li>
             <h5><u>Responsibilties</u></h5>
             <li><h6>Client facing technical support for 500+ researchers with high performance computational resources (Infrastructure as a Service), data-analytics services (Platform as a service) and research technology tools (Software as a service)</h6></li>
           <li><h6>Handled 100+ issues with parallel processing, job scheduling, workload management, software, hardware and network setup with remote server monitoring</h6></li>
           <li><h6>Advised and documented expertise in parallel processing, job scheduling/workload management and technical queries on the HPC cluster to the UIC campus research community of 500+ users with 7000+ compute cores with 192GB memory each and 1.25+ Petabyte storage</h6></li>    
           <h5><u>Projects</u></h5>
          <li><h6>Drupal Platform:
                   <br/>- Implemented the Data Storage Finder project using Drupal and deployment on Docker Containers.
          </h6></li>
        <li><h6>Search Engine Optimization
                  <br/>- Spearheaded the project of improving SEO of ACER website to increase the quantity and quality of traffic through organic search engine results. 
                  <br/>- Cultivated Agile methodologies while performing tasks central to program progress including scheduling, managing resources and meeting deadlines.
        </h6></li>
           </ul></Row>
        </Col>
        </Row>
        <Row className="justify-content-md-center pad-down">
         <Col  xs lg="2"><picture><img className="header-img" src={EALogo} alt="header" fluid /></picture></Col>
         <Col className ="pad-down"> 
         <Row><h5>Software Engineering Intern at Ethna Attributes Pvt Ltd, May - July 2019</h5></Row>
           <Row><ul>
             <li><h6>Developed a predictive health monitoring android application that analyses parameters from a user's smart band by leveraging IoT and Machine Learning.</h6></li>
             <li><h6>Established a firebase connection with the application that periodically displays alert pop-ups.</h6></li>
           </ul></Row>
        </Col>
        </Row>
        <Row className="justify-content-md-center pad-down">
         <Col  xs lg="2"><picture><img className="header-img" src={AULogo} alt="header" fluid /></picture></Col>
         <Col className ="pad-down"> 
         <Row><h5>Research Assistant at Anna University, Nov 2018 – May 2019</h5></Row>
           <Row><ul>
           <li><h6>Prepared a data preprocessing pipeline for the flchain dataset which has 7874 samples and 9 features  </h6></li>
           <li><h6>Achieved 75% accuracy by training and performing hyperparameter tuning of Multi-Layer Perceptron model for predicting graft survival.</h6></li>
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
