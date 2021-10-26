import React from "react";
import {
  Row,
  Col,
  Form,
  FormControl,
  Button,
  Card,
  Stack,
} from "react-bootstrap";

import "./RightSider.css";
const RightSider = () => {
  return (
    <Col xs={12} md={9} lg={8} style={{ height: "100%" }}>
      <Row style={{ height: "99%" }}>
        <Card style={{ height: "calc(100%)", padding: "0" }}>
          <Card.Header
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <p>Recent</p>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Card.Header>
          <Card.Body style={{ overflow: "scroll" }}>
            <Stack gap={1}>
              <div className="bg-light border">1</div>
              <div className="bg-light border">2</div>
              <div className="bg-light border">3</div>
              <div className="bg-light border">Third item</div>
              <div className="bg-light border">First item</div>
              <div className="bg-light border">First item </div>
              <div className="bg-light border">Second item</div>
              <div className="bg-light border">Third item</div>
              <div className="bg-light border">Third item</div>
              <div className="bg-light border">First item</div>
              <div className="bg-light border">First item </div>
              <div className="bg-light border">Second item</div>
              <div className="bg-light border">Third item</div>
              <div className="bg-light border">First item</div>
              <div className="bg-light border">First item </div>
              <div className="bg-light border">Second item</div>
              <div className="bg-light border">Third item</div>
              <div className="bg-light border">1</div>
              <div className="bg-light border">2</div>
              <div className="bg-light border">3</div>
              <div className="bg-light border">Third item</div>
              <div className="bg-light border">First item</div>
              <div className="bg-light border">First item </div>
              <div className="bg-light border">Second item</div>
              <div className="bg-light border">Third item</div>
              <div className="bg-light border">Third item</div>
              <div className="bg-light border">First item</div>
              <div className="bg-light border">First item </div>
              <div className="bg-light border">Second item</div>
              <div className="bg-light border">Third item</div>
              <div className="bg-light border">First item</div>
              <div className="bg-light border">First item </div>
              <div className="bg-light border">Second item</div>
              <div className="bg-light border">Third item</div>
            </Stack>
          </Card.Body>
        </Card>
      </Row>
      {/* <Row style={{ height: "5%" }}>
        <Navbar sticky="top" expand="lg" variant="dark" bg="dark">
          <Container>
            <Navbar.Brand href="#">Navbar</Navbar.Brand>

            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Container>
        </Navbar>
      </Row>
      <Row style={{ height: "95%", overflow: "scroll" }}>
        <Card>
          <Card>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Dropdown.Divider />
              <Card.Subtitle className="mb-2 text-muted divider">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Card>
      </Row> */}
    </Col>
  );
};
export default RightSider;
