import React from "react";
import { Button, Card } from "react-bootstrap";
import './ServiceDetail.css';

const ServiceDetail = ({ service }) => {
  return (
    <Card style={{ width: "18rem" }} className="m-3 p-3">
      <div className="text-center">
        <Card.Img className="w-25" variant="top" src={service.image} />
      </div>
      <Card.Body>
        <Card.Title>{service.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default ServiceDetail;
