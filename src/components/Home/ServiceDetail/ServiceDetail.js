import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './ServiceDetail.css';

const ServiceDetail = ({ service }) => {
  return (
    <Card style={{ width: "18rem" }} className="m-3 p-3">
      <div className="text-center">
        <Card.Img className="w-25" variant="top" src={service.image} />
      </div>
      <Card.Body>
        <Card.Title>{service.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted lead font-weight-bold">${service.price}</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="dark"><Link className="lead text-decoration-none text-white" to={`/dashboard/order/${service.name}`}>Order</Link></Button>
      </Card.Body>
    </Card>
  );
};

export default ServiceDetail;
