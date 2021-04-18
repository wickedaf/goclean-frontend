import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { UserContext } from "../../../App";

const OrderList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://goclean-react.herokuapp.com/orders?email=" + loggedInUser.email)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [loggedInUser.email]);

  return (
    <div className="ml-5 my-5">
      <Table striped hover className="shadow rounded-lg border-0">
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
              <td className="text-success">Done</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default OrderList;
