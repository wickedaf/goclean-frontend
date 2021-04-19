import React, { useContext } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import "./HeaderNav.css";

const HeaderNav = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <Navbar className="container" collapseOnSelect expand="lg">
      <Navbar.Brand className="">
        <Link className="text-decoration-none text-dark" to="/">
          <h2 className="display-4 font-weight-bolder">Go Clean</h2>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Link
            className="mx-3 my-2 text-dark font-weight-bold lead text-decoration-none"
            to="/"
          >
            Home
          </Link>
          <Link
            className="mx-3 my-2 text-dark font-weight-bold lead text-decoration-none"
            to="/about-us"
          >
            About Us
          </Link>
          <Link
            className="mx-3 my-2 text-dark font-weight-bold lead text-decoration-none"
            to="/dashboard"
          >
            Admin
          </Link>
          <Link
            className="mx-3 my-2 text-dark font-weight-bold lead text-decoration-none"
            to="/"
            disabled
          >
            Contact
          </Link>
          {loggedInUser.isSignedIn ? (
            <button type="button" className="btn btn-dark my-1">
              {loggedInUser.name} 
              {/* <img src={loggedInUser.photo} className="rounded-circle w-25 px-2" alt=""/> */}
            </button>
          ) : (
            <Button className="rounded-lg" variant="dark">
              <Link className="lead text-white text-decoration-none" to="/login">
                Login
              </Link>
            </Button>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HeaderNav;
