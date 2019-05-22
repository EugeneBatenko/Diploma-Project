import React, {Component} from 'react';

import Header from '../../elements/Header';
import Footer from "../../elements/Footer";
//Scroll restore
import ScrollToTop from "../../elements/ScrollToTop";


class TimeLine extends Component {
    render() {
        return (
            <div className="container-wrapper">
                <ScrollToTop/>
                <Header/>
                <main>
                    <div className="container">

                        <h2 className="section-title text-center h2-line pt-1 mt-5 mb-0">Timeline of project</h2>

                        <section className="l-timeline">

                            <article className="container-block left">
                                <div className="content">
                                    <h3>2018-2019</h3>
                                    <p>“Eye-Tracking in Medical Applications”: Innovation Start-up Project with support
                                        Chernovetskyi Investment Group (CIG R&D LAB) for students and postgraduates of
                                        Odessa National Polytechnic University. Mentor – Professor Pavlenko V.D.</p>
                                </div>
                            </article>

                            <article className="container-block right">
                                <div className="content">
                                    <h3>2017-2018</h3>
                                    <p>“Eye-Tracking Technology in Medical Research”: Innovation Start-up Project with
                                        support Chernovetskyi Investment Group (CIG R&D LAB) for students and
                                        postgraduates of Odessa National Polytechnic University. Mentor – Professor
                                        Pavlenko V.D.</p>
                                </div>
                            </article>

                            <article className="container-block left">
                                <div className="content">
                                    <h3>2017</h3>
                                    <p>Pavlenko V.D. and other (2017), “Methodological Bases and Tools of Information
                                        Technology Diagnostics of States Continuous Objects with using Volterra Models”.
                                        Technical Reports on research work, State Registration No 0115U000410 (Сustomer
                                        Ministry of Education and Science of Ukraine) </p>
                                </div>
                            </article>

                            <article className="container-block right">
                                <div className="content">
                                    <h3>2017</h3>
                                    <p>Pavlenko V.D. and other (2017), “Theoretical Foundations, Methods and Tools of
                                        Information Technology for the Diagnosis of Dynamic Objects based on Volterra
                                        Models”. Technical Reports on research work, State Registration No 0115U003574
                                        (Сustomer Ministry of Education and Science of Ukraine).</p>
                                </div>
                            </article>

                        </section>

                    </div>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default TimeLine;
