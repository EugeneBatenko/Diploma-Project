import React, {Component} from 'react';

import Header from '../../elements/Header';
import Footer from "../../elements/Footer";
//Scroll restore
import ScrollToTop from "../../elements/ScrollToTop";


class Awards extends Component {
    render() {
        return (
            <div className="container-wrapper">
                <ScrollToTop/>
                <Header/>
                <main>
                    <section className="container mt-5 pt-5">

                        <h2 className="section-title text-center h2-line">Awards</h2>

                        <div className="row">

                            <div className="col-12">
                                <h3>Diploma, Award </h3>
                                <p className="description">Diploma, Award of the Presidium of the National Academy of
                                    Sciences of
                                    Ukraine in the competition of research works of students in the 2016/2017 for the
                                    work "Methods and Tools for Identification Nonlinear Dynamic Systems Based on
                                    Volterra Kernels" (Ivanov I. V., Romanov D. Yu.)</p>
                            </div>

                            <div className="col-12">
                                <h3>Diploma</h3>
                                <p className="description">Diploma for the best work "Identification of the Human
                                    Oculomotor System Based on the Technology of Eye-Tracking" in the second round of
                                    the all-Ukrainian competition of student scientific works in the fields of knowledge
                                    and specialties in 2017/2018 academic year in the specialty "Biomedical engineering"
                                    (Kravchenko E. I., Tchaikovsky G. P.).</p>
                            </div>

                            <div className="col-12">
                                <h3>Diploma</h3>
                                <p className="description">Diploma for the II place in the all-Ukrainian competition
                                    of student scientific works in the specialty "Software Engineering" for the work
                                    "Software Tools for the Identification of the Eye-Motor System based on Eye-Tracking
                                    technology" (Kotov D. G.).</p>
                            </div>

                            <div className="col-12">
                                <h3>Top place</h3>
                                <p className="description">Top place at competition of diploma works of master
                                    students Odessa National Polytechnic University in 2019 for the work "Research of
                                    the Dynamics Eye-Motor System Human" (Kravchenko E. I.)</p>
                            </div>

                        </div>

                    </section>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default Awards;
