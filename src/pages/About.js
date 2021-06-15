import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faGlobe } from "@fortawesome/free-solid-svg-icons";

class About extends React.Component {
  render() {
    return (
    <div className="primary outer-structure" style={{ display: "flex", flexDirection: "column"}}>
        <div className="inner-structure center" style={{ flexDirection: "column" }}>
          <h1 class="title_heading">ABOUT ME</h1>
          <Container fluid style={{ padding: "1.5em" }}>
            <Row className="justify-content-center" style={{ alignItems: "center" }}>
              <Col style={{ textAlign: "center" }}>
              
              </Col>
            </Row>
            <Row className="justify-content-center" style={{ alignItems: "center" }}>
              <Col lg="10">
                <p
                  id="about"
                  className="secondary-text"
                  style={{
                    padding: "25px 10px",
                    textAlign: "justify",
                    color: "#111111",
                    margin: "0w",
                  }}
                >
                  I am a graduate student at University of Illinois at Chicago purusing MS in Computer Science graduating December 2022.
                  With a strong purpose and passion for problem solving and solution design, I am actively looking for a Summer 2022 intern position as a Software Developer anywhere in the US.  </p>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Button className="resume-btn" href="/resume.pdf" target="_blank" size="lg">
                <FontAwesomeIcon icon={faFileAlt} /> Résumé
              </Button>
        
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default About;
