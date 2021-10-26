import React, { useState } from "react";
import {
  Container,
  Offcanvas,
  Navbar,
  Nav,
  Image,
  Card,
} from "react-bootstrap";
import profilePic from "../../assests/images.png";
import MyAttendance from "../MyAttendance/MyAttendance";
const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      style={{ height: "8%" }}
    >
      <Container>
        <Navbar.Brand href="#home">TechSchool</Navbar.Brand>
        <Nav onClick={handleShow}>
          <Nav.Link eventKey={2} href="#memes">
            Nasheed Akhtar
            <Image style={{ width: "50px" }} src={profilePic} roundedCircle />
          </Nav.Link>
        </Nav>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handleShow}
        />
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton lg={12}>
            <Offcanvas.Title>Profile</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body lg={12}>
            <Card>
              <Card.Img
                style={{ width: "200px" }}
                variant="top"
                src={profilePic}
              />
              <Card.Body>
                <Card.Title>Numair Akhtar</Card.Title>
                <Card.Text>Standard : UKG, Roll : 12</Card.Text>
                <Card.Link href="#">Edit</Card.Link>
              </Card.Body>
            </Card>
            <MyAttendance />
            <Card>
              <Card.Header>My Achievements</Card.Header>
            </Card>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
};
export default Header;
