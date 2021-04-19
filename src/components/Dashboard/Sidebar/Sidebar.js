import { faCommentDots, faHdd } from "@fortawesome/free-regular-svg-icons";
import {
  faCartArrowDown,
  faCube,
  faPlusSquare,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import "./Sidebar.css";

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("https://goclean-react.herokuapp.com/adminCheck?email=" + loggedInUser.email)
      .then((res) => res.json())
      .then((data) => {
        if (data.length !== 0) {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      });
  }, [loggedInUser.email]);

  return (
    <div className="sidebar">
      <Link className="display-4 text-decoration-none active" to="/">
        GoClean
      </Link>
      <Link
        className="lead text-decoration-none"
        to="/dashboard/order/serviceName"
      >
        <FontAwesomeIcon className="mx-2" icon={faCartArrowDown} />
        Order
      </Link>
      <Link className="lead text-decoration-none" to="/dashboard/orderList">
        <FontAwesomeIcon className="mx-2" icon={faHdd} />
        Order list
      </Link>
      <Link className="lead text-decoration-none" to="/dashboard/review">
        <FontAwesomeIcon className="mx-2" icon={faCommentDots} />
        Review
      </Link>
      {isAdmin && (
        <Link className="lead text-decoration-none" to="/dashboard/addService">
          <FontAwesomeIcon className="mx-2" icon={faPlusSquare} />
          Add Service
        </Link>
      )}

      {isAdmin && (
        <Link className="lead text-decoration-none" to="/dashboard/makeAdmin">
          <FontAwesomeIcon className="mx-2" icon={faUserPlus} />
          Make Admin
        </Link>
      )}

      {isAdmin && (
        <Link
          className="lead text-decoration-none"
          to="/dashboard/manageService"
        >
          <FontAwesomeIcon className="mx-2" icon={faCube} />
          Manage Service
        </Link>
      )}
    </div>
  );
};

export default Sidebar;
