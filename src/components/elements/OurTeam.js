import React, { Component } from 'react';
import Slider from 'react-slick';
import { Link } from "react-router-dom";
//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTelegram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
//Img
import OurTeamImg from '../pages/MainPage/img/image-probe.jpg';
import PavlenkoImg from '../pages/MainPage/img/Pavlenko.jpg';
import ChoriImg from '../pages/MainPage/img/Chori.jpg';
import KotovImg from '../pages/MainPage/img/Kotov.jpg';
import NextArrowIcon from '../pages/MainPage/img/nextArrow.svg';
import PrevArrowIcon from '../pages/MainPage/img/prevArrow.svg';

function NextArrow(props) {
    const { className, onClick } = props;
    return (
      <div
      className={className}
      onClick={onClick}
      >
          <img src={NextArrowIcon} alt="next-arrow"/>
      </div>
    );
}

function PrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        >
            <img src={PrevArrowIcon} alt="prev-arrow"/>
        </div>
    );
}


class OurTeam extends Component {
    render() {

        const settings = {
            dots: false,
            infinite: true,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: <NextArrow/>,
            prevArrow: <PrevArrow/>,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ],

    };
        return (

           <section className="l-our-team pb-5">

                <div className="container">

                    <h2 className="section-title text-center h2-line">Our team</h2>

                    {/*<div className="row justify-content-center mb-4">*/}
                    {/*    <figure className="team-photo col-8">*/}
                    {/*        <img src={OurTeamImg} alt="our-team"/>*/}
                    {/*            <figcaption className="text-center h5 mt-1">Members of project</figcaption>*/}
                    {/*    </figure>*/}
                    {/*</div>*/}

                    <div className="row justify-content-center">

                        <Slider className="col m-team-slider" {...settings}>

                            <div className="slide">
                                <figure className="img-container mb-4">
                                    <img src={PavlenkoImg} alt="our-team"/>
                                </figure>

                                <div className="slide-content d-flex flex-column align-items-center mb-3"><h5>DSc, Professor Pavlenko Vitaliy</h5>
                                    <p>Mentor</p>
                                    <p><FontAwesomeIcon icon={faEnvelope}/> pavlenko_vitalij@mail.ru</p>
                                    <p><FontAwesomeIcon icon={faPhone}/> +380 94 996 65 64</p>
                                </div>

                                <div className="social">
                                    <Link className="social-link" to="#"><FontAwesomeIcon icon={faFacebookF}/></Link>
                                    <Link className="social-link" to="#"><FontAwesomeIcon icon={faTelegram}/></Link>
                                    <Link className="social-link" to="#"><FontAwesomeIcon icon={faLinkedin}/></Link>
                                </div>
                            </div>

                            <div className="slide">
                                <figure className="img-container mb-4">
                                    <img src={KotovImg} alt=""/>
                                </figure>

                                <div className="slide-content d-flex flex-column align-items-center mb-3"><h5>Kotov Dmitriy</h5>
                                    <p>Programmer Android Developer</p>
                                    <p><FontAwesomeIcon icon={faEnvelope}/> example@mail.com</p>
                                    <p><FontAwesomeIcon icon={faPhone}/> phone number</p>
                                </div>

                                <div className="social">
                                    <Link className="social-link" to="#"><FontAwesomeIcon icon={faFacebookF}/></Link>
                                    <Link className="social-link" to="#"><FontAwesomeIcon icon={faTelegram}/></Link>
                                    <Link className="social-link" to="#"><FontAwesomeIcon icon={faLinkedin}/></Link>
                                </div>
                            </div>

                            <div className="slide">
                                <figure className="img-container mb-4">
                                    <img src={ChoriImg} alt=""/>
                                </figure>

                                <div className="slide-content d-flex flex-column align-items-center mb-3"><h5>Chori Vladyslav</h5>
                                    <p>Data Scientist</p>
                                    <p><FontAwesomeIcon icon={faEnvelope}/> vladyslav.chori@gmail.com</p>
                                    <p><FontAwesomeIcon icon={faPhone}/> phone number</p>
                                </div>

                                <div className="social">
                                    <Link className="social-link" to="#"><FontAwesomeIcon icon={faFacebookF}/></Link>
                                    <Link className="social-link" to="#"><FontAwesomeIcon icon={faTelegram}/></Link>
                                    <Link className="social-link" to="#"><FontAwesomeIcon icon={faLinkedin}/></Link>
                                </div>
                            </div>

                            <div className="slide">
                                <figure className="img-container mb-4">
                                    <img src={OurTeamImg} alt=""/>
                                </figure>

                                <div className="slide-content d-flex flex-column align-items-center mb-3"><h5>Name
                                    Surname</h5>
                                    <p>developer</p>
                                    <p><FontAwesomeIcon icon={faEnvelope}/> example@mail.com</p>
                                    <p><FontAwesomeIcon icon={faPhone}/> phone number</p>
                                </div>

                                <div className="social">
                                    <Link className="social-link" to="#"><FontAwesomeIcon icon={faFacebookF}/></Link>
                                    <Link className="social-link" to="#"><FontAwesomeIcon icon={faTelegram}/></Link>
                                    <Link className="social-link" to="#"><FontAwesomeIcon icon={faLinkedin}/></Link>
                                </div>
                            </div>

                            <div className="slide">
                                <figure className="img-container mb-4">
                                    <img src={OurTeamImg} alt=""/>
                                </figure>

                                <div className="slide-content d-flex flex-column align-items-center mb-3"><h5>Name
                                    Surname</h5>
                                    <p>developer</p>
                                    <p><FontAwesomeIcon icon={faEnvelope}/> example@mail.com</p>
                                    <p><FontAwesomeIcon icon={faPhone}/> phone number</p>
                                </div>

                                <div className="social">
                                    <Link className="social-link" to="#"><FontAwesomeIcon icon={faFacebookF}/></Link>
                                    <Link className="social-link" to="#"><FontAwesomeIcon icon={faTelegram}/></Link>
                                    <Link className="social-link" to="#"><FontAwesomeIcon icon={faLinkedin}/></Link>
                                </div>
                            </div>

                        </Slider>
                    </div>


                </div>

            </section>

        );
    }
}

export default OurTeam;