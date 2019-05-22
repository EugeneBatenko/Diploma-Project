import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faTimes } from '@fortawesome/free-solid-svg-icons'


const openMenu = () => {
    const open = document.getElementById("mob-items");
    open.classList.add("mob-items-position");
    // return openMenu;
}
const closeMenu = () => {
    const close = document.getElementById("mob-items");
    close.classList.remove("mob-items-position");
    // return closeMenu;
}

class Header extends Component {
    render() {
        return (
            <header className="l-header">

                <div className="container">

                    <div className="row align-content-center">

                        <div className="logo d-flex justify-content-center align-content-center col-2">
                            <Link to="/" replace className="nav-link"><FontAwesomeIcon icon={faEye} /></Link>
                        </div>


                        <nav className="nav-desktop col d-xl-block d-lg-block d-md-block d-sm-none d-none">
                            <ul className="d-flex justify-content-between align-content-center mb-0">
                                <li className="nav-link"><a href="server/publications.php">Publications</a></li>

                                <li className="nav-link"><NavLink to="/Instruments" activeStyle={{
                                    color: "royalblue",
                                    transition: "all 0.5s easy-in-out"
                                }}>Instruments</NavLink></li>

                                <li className="nav-link"><a href="server/results.php">Results</a></li>

                                <li className="nav-link"><NavLink to="/Timeline" activeStyle={{
                                    color: "royalblue"
                                }}>Timeline</NavLink></li>

                                <li className="nav-link"><NavLink to="/Awards" activeStyle={{
                                    color: "royalblue"
                                }}>Awards</NavLink></li>
                                <li className="nav-link"><NavLink to="/AboutUs" activeStyle={{
                                    color: "royalblue"
                                }}>About Us</NavLink></li>
                            </ul>
                        </nav>

                        <nav
                            className="nav-mobile d-flex justify-content-end align-items-center col d-xl-none d-lg-none d-md-none d-block">
                            <div className="menu-button" onClick={openMenu}>
                                <span className="line"></span>
                                <span className="line"></span>
                                <span className="line"></span>
                            </div>
                        </nav>

                        <ul className="mob-items d-flex flex-column justify-content-center align-content-center px-0 py-0"
                            id="mob-items">
                            <div className="close-button" onClick={closeMenu}><FontAwesomeIcon icon={faTimes} /></div>
                            <li className="nav-link"><NavLink to="server/publications.php" activeStyle={{
                                color: "royalblue"
                            }}>Publications</NavLink></li>

                            <li className="nav-link"><NavLink to="/Instruments" activeStyle={{
                                color: "royalblue",
                                transition: "all 0.5s easy-in-out"
                            }}>Instruments</NavLink></li>

                            <li className="nav-link"><NavLink to="server/results.php" activeStyle={{
                                color: "royalblue"
                            }}>Results</NavLink></li>

                            <li className="nav-link"><NavLink to="/Timeline" activeStyle={{
                                color: "royalblue"
                            }}>Timeline</NavLink></li>

                            <li className="nav-link"><NavLink to="/Awards" activeStyle={{
                                color: "royalblue"
                            }}>Awards</NavLink></li>
                        </ul>

                    </div>

                </div>

            </header>
        );
    }
}

export default Header;
