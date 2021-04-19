import React, { useContext, useEffect, useState } from "react";
import { Form, Table } from "react-bootstrap";
import { UserContext } from "../../../App";

const OrderList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [orders, setOrders] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch(
      "https://goclean-react.herokuapp.com/orders?email=" + loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [loggedInUser.email]);

  useEffect(() => {
    fetch(
      "https://goclean-react.herokuapp.com/adminCheck?email=" +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.length !== 0) {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      });
  }, [loggedInUser.email]);

  const handleStatus = (orderID, event) => {
    const status = event.target.value;
    const statusData = {
      orderID,
      status: status,
    };

    fetch("https://goclean-react.herokuapp.com/updateStatus", {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(statusData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Data Updated", data);
        alert(`Status updated to ${status}`)
      });
  };

  return (
    <div className="ml-5 my-5">
      { loggedInUser.email 
      ? <Table striped hover className="shadow rounded-lg border-0 table-responsive-sm">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Service</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {orders?.map((order) => (
          <tr>
            <td>{order.name}</td>
            <td>{order.email}</td>
            <td>{order.service}</td>
            <td className="text-success">
              {isAdmin ? (
                <Form.Control
                  onChange={(event) => handleStatus(order._id, event)}
                  as="select"
                  className="mr-sm-2"
                  id="inlineFormCustomSelect"
                  custom
                >
                  <option value={order.status}>{order.status}</option>
                  <option value="Pending">Pending</option>
                  <option value="Ongoing">Ongoing</option>
                  <option value="Done">Done</option>
                </Form.Control>
              ) : (
                <Form.Control
                  onChange={(event) => handleStatus(order._id, event)}
                  as="select"
                  className="mr-sm-2"
                  id="inlineFormCustomSelect"
                  custom
                  disabled
                >
                  <option value={order.status}>{order.status}</option>
                </Form.Control>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    : <h1 className="text-danger display-4">Your session has expired. Please Logout and Login again!!!</h1>
    }
      
    </div>
  );
};

export default OrderList;
