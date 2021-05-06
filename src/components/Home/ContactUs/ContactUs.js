import ParticlesBg from "particles-bg";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <section
      className="section position-relative bg-gradient py-5"
      id="contact"
    >
      <ParticlesBg
        color="#ffffff"
        type="polygon"
        bg={{
          position: "absolute",
          zIndex: 1,
          width: "100%",
          marginTop: "-50px",
          opacity: 0.2,
        }}
      />
      <div className="bg-cta-overlay" />
      <Container className="container py-5">
        <Row className="justify-content-center">
          <Col lg={6}>
            <div className="text-center">
              <h2 className="text-white mb-3">
                Do You Need Success Product Also?
              </h2>
              <a
                href="mailto:rd.emon2@gmail.com"
                className="btn btn-light text-dark mt-4"
              >
                Estimate Project
              </a>
              <a href="mailto:rd.emon2@gmail.com" className="text-white-50">
                <p className="mb-0 mt-4">Or contact with us</p>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;
