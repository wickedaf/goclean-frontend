import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ContactUs = () => {
    return (
        <section className="section position-relative bg-gradient py-5">
          <div className="bg-cta-overlay" />
          <Container className="container">
            <Row className="justify-content-center">
              <Col lg={6}>
                <div className="text-center">
                  <h2 className="text-white mb-3">
                    Do You Need Success Product Also?
                  </h2>
                  <Link to="#" className="btn btn-light mt-4">
                    Estimate Project
                  </Link>
                  <Link to="#" className="text-white-50">
                    <p className="mb-0 mt-4">Or contact with us</p>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
    );
};

export default ContactUs;