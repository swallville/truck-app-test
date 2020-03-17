import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

class UserHeader extends React.Component {
  render() {
    return (
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "100px",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center top"
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="12" md="12">
              <h1 className="display-2 text-white">Driver Enrollment Test</h1>
              <p className="text-white mt-150 mb-5">
                This is the front-end APP for Driver Enrollment
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default UserHeader;
