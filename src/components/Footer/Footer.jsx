import React from "react";
import { Container, Navbar } from "react-bootstrap";
const Footer = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      style={{ height: "10%" }}
    >
      <Container>
        <Navbar.Brand href="#home">TechSchool</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
export default Footer;
