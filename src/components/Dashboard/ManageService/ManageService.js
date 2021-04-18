import { faEdit, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const ManageService = () => {
  const [services, setServices] = useState([]);
  const [deleted, setDeletd] = useState(true);

  useEffect(() => {
    fetch("https://goclean-react.herokuapp.com/allservice")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [deleted]);

  const handleDeleteBtn = (serviceId) => {
    fetch('https://goclean-react.herokuapp.com/deleteService/'+serviceId, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => setDeletd(serviceId))
  };

  return (
    <div className="ml-5 my-5">
      <Table striped hover className="shadow rounded-lg border-0">
        <thead>
          <tr>
            <th>Description</th>
            <th>Weight</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {services?.map((service) => (
            <tr>
              <td>{service.name}</td>
              <td className="w-50">{service.description}</td>
              <td>{service.price}</td>
              <td>
                <button
                  onClick={() => handleDeleteBtn(service._id)}
                  className="btn btn-danger mx-1"
                >
                  <FontAwesomeIcon className="" icon={faTrashAlt} />
                </button>
                <button className="btn btn-danger mx-1">
                  <FontAwesomeIcon className="" icon={faEdit} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageService;
