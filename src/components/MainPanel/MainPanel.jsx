import React from "react";
import { Container, Row } from "react-bootstrap";
import "./MainPanel.css";
import LeftSider from "../LeftSider/LeftSider";
import RightSider from "../RightSider/RightSider";
const MainPanel = () => {
  return (
    <Container fluid style={{ height: "82%" }}>
      <Container
        style={{ height: "100%", background: "#bbd4ce", padding: "0" }}
      >
        <Row style={{ height: "100%", margin: 0, overflow: "scroll" }}>
          <LeftSider />
          <RightSider />
        </Row>
      </Container>
    </Container>
  );
};
export default MainPanel;
