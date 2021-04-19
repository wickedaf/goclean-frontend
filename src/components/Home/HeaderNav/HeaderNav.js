import React, { useContext } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../../App";
import firebase from "firebase/app";
import "firebase/auth";
import "./HeaderNav.css";
import firebaseConfig from "../../Auth/Login/firebase.config";

if(firebase.apps.length === 0 ){ 
  firebase.initializeApp(firebaseConfig);
}

const HeaderNav = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();
  const handleLoginClick = () => {
    history.push("/login")
  }

  const handleLogoutClick = () => {
    firebase.auth().signOut().then(() => {
      setLoggedInUser("")
      console.log("Sign out successful");
    }).catch((error) => {
      // An error happened.
    });
    sessionStorage.removeItem('token')
  }

  const handleDashboardClick = () => {
    if(loggedInUser.email){
      history.push("/dashboard")
    }else{
      handleLogoutClick();
      history.push("/login")
    }
  }
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
          <a
            className="mx-3 my-2 text-dark font-weight-bold lead text-decoration-none"
            href="#about-us"
          >
            About Us
          </a>
          <p
            style={{cursor: "pointer"}}
            className="mx-3 my-2 text-dark font-weight-bold lead text-decoration-none"
            onClick={handleDashboardClick}
          >
            Dashboard
          </p>
          <a
            className="mx-3 my-2 text-dark font-weight-bold lead text-decoration-none"
            href="#contact"
          >
            Contact
          </a>
          {loggedInUser.isSignedIn ? (
            <button onClick={handleLogoutClick} type="button" className="btn btn-dark my-1">
              Logout 
              {/* <img src={loggedInUser.photo} className="rounded-circle w-25 px-2" alt=""/> */}
            </button>
          ) : (
            <Button onClick={handleLoginClick} className="rounded-lg" variant="dark">
              <span className="lead text-white text-decoration-none">
                Login
              </span>
            </Button>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HeaderNav;
