import React, { Component } from 'react';
import { Link} from "react-router-dom";
//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';


class Footer extends Component {
    render() {
        const year = new Date().getFullYear();
        return (

            <footer className="l-footer">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 d-flex flex-column">
                            <h3 className="text-light">Site map</h3>
                            <Link className="text-light py-1" to="#">Publications</Link>
                            <Link className="text-light py-1" to="#">Instruments</Link>
                            <Link className="text-light py-1" to="#">Result</Link>
                            <Link className="text-light py-1" to="#">Timeline</Link>
                            <Link className="text-light py-1" to="#">Awards</Link>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 d-flex flex-column">
                            <h3 className="text-light">Follow us</h3>
                            <Link className="text-light py-1" to="#"><FontAwesomeIcon icon={faFacebookF}/> Facebook</Link>
                            <Link className="text-light py-1" to="#"><FontAwesomeIcon icon={faInstagram}/> Instagram</Link>
                            <Link className="text-light py-1" to="#"><FontAwesomeIcon icon={faLinkedin}/> Linkedin</Link>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 text-light">
                            <h3>Contacts</h3>
                            <p className="py-1"><FontAwesomeIcon icon={faMapMarker}/> Odessa, ONPU,
                                Shevchenka Ave 1F</p>
                            <p className="py-1"><FontAwesomeIcon icon={faEnvelope}/> pavlenko_vitalij@mail.ru</p>
                            <p className="py-1"><FontAwesomeIcon icon={faPhone}/> +380 94 996 65 64</p>
                        </div>

                        <div className="text-light col-8 mt-xl-5 mt-lg-5 mt-md-5 mt-sm-5 mt-1">
                            <p className="mb-1">Eye tracking ONPU</p>
                            <p>Odessa, 2017 - {year}</p>
                        </div>
                        <div className="text-light col-4 mt-xl-5 mt-lg-5 mt-md-5 mt-sm-5 mt-1">
                            <p className="mb-1">Developed by Yevhen Batenko 2019</p>
                            <p><FontAwesomeIcon icon={faEnvelope}/> batenko_e_v@ukr.net</p>
                        </div>
                    </div>
                </div>
            </footer>

        );
    }
}

export default Footer;