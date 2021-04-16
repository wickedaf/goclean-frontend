import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import './HeaderNav.css';

const HeaderNav = () => {
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
            className="mx-3 my-2 text-white font-weight-bold lead text-decoration-none"
            to="/"
          >
            Home
          </Link>
          <Link
            className="mx-3 my-2 text-white font-weight-bold lead text-decoration-none"
            to="/orders"
          >
            Orders
          </Link>
          <Link
            className="mx-3 my-2 text-white font-weight-bold lead text-decoration-none"
            to="/admin"
          >
            Admin
          </Link>
          <Link
            className="mx-3 my-2 text-white font-weight-bold lead text-decoration-none"
            to="/"
            disabled
          >
            Deals
          </Link>
          <Button className="rounded-lg py-2 px-4" variant="danger">
            <Link className="text-white lead text-decoration-none" to="/login">
              Login
            </Link>
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HeaderNav;
