import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div>
            <footer class="footer_1">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 col-sm-6 col-md-5">
                        <aside class="widget aboutwidget">
                            <a class="d-flex align-items-center my-2 text-decoration-none" href="#"><img  className="mr-2 w-25" src="/images/logo.svg" alt="" /><span className="display-4">GoClean</span></a>
                            <p className="lead">
                                Welcome to our web design agency. Lorem ipsum is simply free text dolor sit amet consectetur adipisicing elit. 
                                Tempore corrupti temporibus fuga earum asperiores, alias excepturi sit mpedit fugit laudantium.
                            </p>
                        </aside>
                    </div>
                    <div class="col-lg-4 col-sm-4 col-md-4">
                        <aside class="widget contact_widgets">
                            <h3 class="display-4 text-uppercase">contact</h3>
                            <p className="lead">
                                66 Broklyn Street, New York<br />
                                United States of America
                            </p>
                            <p className="lead">Phone: 666 888 000</p>
                            <p className="lead">E-mail: <a href="#">needhelp@meipaly.com</a></p>
                        </aside>
                    </div>
                    <div class="col-lg-3 col-sm-2 col-md-3">
                        <aside class="widget social_widget">
                        <h3 class="display-4 text-uppercase">Social</h3>
                            <ul >
                                <li><a className="d-flex align-items-center text-decoration-none" href="#"><FontAwesomeIcon className="text-black social-icon mr-2" icon={faTwitter} />Twitter</a></li>
                                <li><a className="d-flex align-items-center text-decoration-none" href="#"><FontAwesomeIcon className="text-black social-icon mr-2" icon={faFacebook} />Facebook</a></li>
                                <li><a className="d-flex align-items-center text-decoration-none" href="#"><FontAwesomeIcon className="text-black social-icon mr-2" icon={faYoutube} />Youtube</a></li>
                            </ul>
                        </aside>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 col-sm-12 text-center">
                        <div class="copyright">
                            © copyright 2019 by <a href="#">Layerdrops.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </div>
    );
};

export default Footer;