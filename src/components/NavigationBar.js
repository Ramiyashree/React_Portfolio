import React from "react";
import { Nav, Navbar, NavLink } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar
      className="dark-bar"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 2001,
      }}
      variant="dark"
      expand="lg"
    >
      <Navbar.Brand href="/">RAMIYA SHREE SESHAIAH</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto nav-menu">
          <NavLink href="/#">Home</NavLink>
          <NavLink href="/#/about">About</NavLink>
          <NavLink href="/#/education">Education</NavLink>
          <NavLink href="/#/experience">Experience</NavLink>
          <NavLink href="/#/projects">Projects</NavLink>
          <NavLink href="/#/skills">Skills</NavLink>
          <NavLink href="/#/achievements">Achievements</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
