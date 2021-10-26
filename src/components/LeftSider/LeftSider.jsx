import React from "react";
import { Row, Col, Stack, Card } from "react-bootstrap";
const LeftSider = () => {
  return (
    <Col
      xs={12}
      md={3}
      lg={4}
      style={{
        height: "100%",
      }}
    >
      <Row
        style={{
          height: "50%",
        }}
      >
        <Card style={{ height: "calc(100%)", padding: "0" }}>
          <Card.Header>
            <p> Notices</p>
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
            </Stack>
          </Card.Body>
        </Card>
      </Row>
      <Row
        style={{
          height: "49%",
        }}
      >
        <Card style={{ height: "calc(100%)", padding: "0" }}>
          <Card.Header>
            {" "}
            <p> Feedback</p>
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
              <div className="bg-light border">1</div>
              <div className="bg-light border">2</div>
              <div className="bg-light border">3</div>
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
            </Stack>
          </Card.Body>
        </Card>
      </Row>
    </Col>
  );
};
export default LeftSider;
