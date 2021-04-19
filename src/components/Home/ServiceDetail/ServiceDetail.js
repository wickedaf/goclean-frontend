import React from "react";
import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../../App";
import './ServiceDetail.css';

const ServiceDetail = ({ service }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const handleOrderClick = () => {
    if(loggedInUser.email){
      history.push(`/dashboard/order/${service.name}`)
    }else{
      history.push("/login")
    }
  }
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
        <Button onClick={handleOrderClick} variant="dark"><span className="lead text-decoration-none text-white">Order</span></Button>
      </Card.Body>
    </Card>
  );
};

export default ServiceDetail;
