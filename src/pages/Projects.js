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
        <h1 class="title_heading pad-down">PROJECTS</h1>
        <Container fluid style={{ padding: "5em" }}>

           <Row className="justify-content-md-center">
         <Col className ="pad-down"> 
         <Row><a href="https://github.com/RamiyaShreeSeshaiah/CloudSimulator-441">CloudOrgSimulator [Scala]</a> </Row>
         <Row><ul>
             <li><h6>Created cloud simulators using CloudSimPlus for evaluating executions of applications in cloud datacenters.</h6></li>
             <li><h6>Developed simulations to examine Time Shared and Space Shared resource allocation models, as well as the costs associated with several cloud provider models, including SAAS, IAAS, and PAAS. </h6></li>
           </ul></Row>
         </Col>
        </Row>

   <Row className="justify-content-md-center">
         <Col className ="pad-down"> 
         <Row><a href="https://github.com/RamiyaShreeSeshaiah/Streaming-Data-Pipeline">  Streaming data pipeline [Scala, AWS EC2, S3, Apache Kafka, Spark]</a>  </Row>
         <Row><ul>
             <li><h6>Implemented an actor-model service using Akka that monitors the updates in real-time log files.</h6></li>
             <li><h6>Developed a Kafka Stream for the updated logs Which is integrated with Spark where the stakeholders are notified via Amazon Simple Email service in the event of error/warning log messages.</h6></li>
           </ul></Row>
         </Col>
        </Row>

   <Row className="justify-content-md-center">
         <Col className ="pad-down"> 
         <Row><a href="https://github.com/RamiyaShreeSeshaiah/MapReduce_CS441">Map-Reduce-Log-Digest  [Scala, Hadoop, AWS-EMR] </a> </Row>
         <Row><ul>
             <li><h6>Generated statistics for sl4j generated log files depending on various log levels and also searched the logs for certain messages using a multiple of mapper and reducer implementations.</h6></li>
            <li><h6>Deployed and tested the jobs on the AWS-EMR cluster using multiple step executions to execute project Jar file. </h6></li>
           </ul></Row>
         </Col>
        </Row>

   <Row className="justify-content-md-center">
         <Col className ="pad-down"> 
         <Row><a href="https://github.com/RamiyaShreeSeshaiah/CS441_H3_gRPC_REST">Log-Search [Scala, Akka, Grpc, AWS (EC2, S3, Lambda, API-Gateway)]</a>  </Row>
         <Row><ul>
             <li><h6>Deployed an EC2 instance with a LogGenerator to periodically send logs into an S3 bucket, and Rest APIs are deployed via AWS API-Gateway to trigger various Lambda functions to receive logs from an S3 bucket. </h6></li>
             <li><h6>Implemented search functionality to look for ERROR logs within a time frame permitted by the API request.</h6></li>
             <li><h6>Created a client-side Akka-Http application to provide GRPC protobufs and communicate with the API-Gateway. </h6></li>
           </ul></Row>
         </Col>
        </Row>


        <Row className="justify-content-md-center">
         <Col className ="pad-down"> 
         <Row><a href="">Job Tracking Application - MERN - March2021</a>  <a href="https://jobapplicationtrackermern.netlify.app/">livewebsite</a></Row>
         <Row><ul>
             <li><h6>Developed the MERN stack web app for tracking a job through every state of the process where a job process</h6></li>
             <li><h6>User can create, update, view and delete a job along with its details and can also filter out the specific job</h6></li>
             <li><h6>Provided login with email using JWT and Google OAuth Authentication </h6></li>
           </ul></Row>
         </Col>
        </Row>

          <Row style={{background:"#f5f5f5"}} className="justify-content-md-center">
         <Col className ="pad-down"> 
         <Row><a href = " "> DEEP SEE CRIME – An AI Based Crime Monitoring System - Aug 2020 </a></Row>
           <Row><ul>
             <li><h6>Trained an Anomaly detection model with a true-positive rate of 0.73 using 3D Convolutional Neural Networks.</h6></li>
             <li><h6>Built a web application for crime monitoring system using JS, Django Restful API and SqLite Database.</h6></li>
           </ul></Row>
        </Col>
        </Row>

        <Row className="justify-content-md-center pad-down">
         <Col className ="pad-down"> 
         <Row><a href = " "> Symptoms based disease prediction using decision tree and electronic health record analysis - May 2020 </a></Row>
           <Row><ul>
             <li><h6>Using NLP (NLTK libraries - Corpus & Tokenizers) generated the summary of health records.</h6></li>
             <li><h6>Created a Python Django web application for managing and accessing the prediction results.</h6></li>
           </ul></Row>
        </Col>
        </Row>

        <Row style={{background:"#f5f5f5"}}  className="justify-content-md-center pad-down">
         <Col className ="pad-down"> 
         <Row><a href = " " > Silent-horn: A smart web app for hearing impaired people - Sept 2018  </a></Row>
           <Row><ul>
             <li><h6>Implemented a web application for accessing information and tracking the medical records using PHP, JS, HTML, CSS and MySQL.</h6></li>
             <li><h6>Integrated the app with a sound sensor to alert external sound beyond 60db using visual notifications.</h6></li>
           </ul></Row>
        </Col>
        </Row>

        <Row className="justify-content-md-center pad-down">
         <Col className ="pad-down"> 
         <Row><a href = " " >Atrocity Case Management and Monitoring - March 2018  </a></Row>
           <Row><ul>
             <li><h6>Coded a web application managing different user roles, profiles, uploading cases, notification of new updates and alert messages using PHP, Google Cloud Platform, JS and MySQL database.</h6></li>
             <li><h6>Provided a better solution to enhance the management, documentation and monitoring of 5000 cases under atrocity act.</h6></li>
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
