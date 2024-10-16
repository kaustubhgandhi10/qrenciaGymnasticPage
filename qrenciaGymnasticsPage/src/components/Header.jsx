import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../styles/header.css";
import QrenciaLogo from "../images/qrenciaLogo.png";

export const Header = () => {
  const handleLoginPage = () => {
    window.location.href = "https://www.qrencia.com/login";
  };

  const handleJoinPage = () => {
    window.location.href = "https://www.qrencia.com/signup";
  };
  return (
    <div id="header" className="sticky-menu">
      <Container>
        <Row>
          <Col xs={6} sm={8} lg={8}>
            <a href="https://www.qrencia.com/">
              <img src={QrenciaLogo} alt="Qrencia" />
            </a>
          </Col>
          <Col className="header-btn" xs={6} sm={4} lg={4}>
            <Button
              variant="outline-dark"
              onClick={handleLoginPage}
              className="header-login"
            >
              Login
            </Button>
            <Button onClick={handleJoinPage} className="header-join">
              Join Now
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
