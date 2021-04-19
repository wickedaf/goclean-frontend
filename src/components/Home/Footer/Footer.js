import {
  faFacebook,
  faGithub,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer_1">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-sm-6 col-md-5">
              <aside className="widget aboutwidget">
                <Link
                  className="d-flex align-items-center my-2 text-decoration-none"
                  to="#"
                >
                  <img className="mr-2 w-25" src="/images/logo.svg" alt="" />
                  <span className="display-4">GoClean</span>
                </Link>
                <p className="lead">
                  Welcome to our web design agency. Lorem ipsum is simply free
                  text dolor sit amet consectetur adipisicing elit. Tempore
                  corrupti temporibus fuga earum asperiores, alias excepturi sit
                  mpedit fugit laudantium.
                </p>
              </aside>
            </div>
            <div className="col-lg-4 col-sm-4 col-md-4">
              <aside className="widget contact_widgets">
                <h3 className="display-4 text-uppercase">contact</h3>
                <p className="lead">
                  West Vatara, Dhaka
                  <br />
                  Bangladesh
                </p>
                <a href="tel:+8801843356499" className="lead text-decoration-none">Phone: +880 1843356499</a>
                <p className="lead">
                  E-mail: <a href="#">rd.emon2@gmail.com</a>
                </p>
              </aside>
            </div>
            <div className="col-lg-3 col-sm-2 col-md-3">
              <aside className="widget social_widget">
                <h3 className="display-4 text-uppercase">Social</h3>
                <ul>
                  <li>
                    <a
                      className="d-flex align-items-center text-decoration-none"
                      href="http://linkedin.com/in/ishahriaremon"
                    >
                      <FontAwesomeIcon
                        className="text-black social-icon mr-2"
                        icon={faLinkedinIn}
                      />
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      className="d-flex align-items-center text-decoration-none"
                      href="http://facebook.com/wickedaf"
                    >
                      <FontAwesomeIcon
                        className="text-black social-icon mr-2"
                        icon={faFacebook}
                      />
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      className="d-flex align-items-center text-decoration-none"
                      href="http://github.com/wickedaf"
                    >
                      <FontAwesomeIcon
                        className="text-black social-icon mr-2"
                        icon={faGithub}
                      />
                      Github
                    </a>
                  </li>
                </ul>
              </aside>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-sm-12 text-center">
              <div className="copyright lead">
                Copyright &copy; {new Date().getFullYear()} All rights reserved
                | Made with ❤ by 
                <a className="text-danger" href="http://linkedin.com/in/ishahriaremon"> Shahriar Emon</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
