import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faLinkedin,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    window.addEventListener(
      "load",
      () => {
        this.setState({
          isMobileView: window.innerWidth < 800,
        });
      },
      false
    );
    window.addEventListener(
      "resize",
      () => {
        this.setState({
          isMobileView: window.innerWidth < 800,
        });
      },
      false
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "load",
      () => {
        this.setState({
          isMobileView: window.innerWidth < 800,
        });
      },
      false
    );
    window.removeEventListener(
      "resize",
      () => {
        this.setState({
          isMobileView: window.innerWidth < 800,
        });
      },
      false
    );
  }
  
  render() {
    const smallViewArray = this.state.isMobileView
      ? ["", "", "", "", "", ""]
      : ["Email", "GitHub","LinkedIn"];
    return (
      <Navbar
        className="white-bar"
        style={{
          position: "sticky",
          bottom: 0,
          zIndex: 2000,
        }}
        variant= "light"
      >
        <Nav className="mx-auto">
          <Nav.Link href="https://github.com/Ramiyashree" target="_blank">
            <FontAwesomeIcon icon={faGithubSquare} /> {smallViewArray[1]}
          </Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/ramiyashree/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} /> {smallViewArray[2]}
          </Nav.Link>
          <Nav.Link href="mailto:rsesha3@uic.edu"  target="_blank">
            <FontAwesomeIcon icon={faGoogle} /> {smallViewArray[0]}
          </Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default Footer;
