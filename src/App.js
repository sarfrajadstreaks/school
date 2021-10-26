import React from "react";
import Container from "react-bootstrap/Container";
import Header from "./components/Header/Header";
import MainPanel from "./components/MainPanel/MainPanel";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Container
        fluid
        style={{ height: "100vh", padding: "0", background: "#679185" }}
      >
        <Header />
        <MainPanel />
        <Footer />
      </Container>
    </>
  );
}

export default App;
