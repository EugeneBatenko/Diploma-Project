import React, {Component} from 'react';


class About extends Component {
    render() {
        return (
            <section className="l-about mb-5">
                <div className="container pt-5">
                    <article className="row mt-5 mb-5">
                        <div className="description col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <h2 className="h2-line">About Project</h2>
                            <p>The proposed information technology of indirect control and diagnostics oculo-motor
                                system (OMS), as a nonlinear dynamical system based on non-parametric identification OMS
                                using multidimensional transfer functions (MTF) - integral transforms nuclei Volterra
                                model) and is in a sequential addressing these problems. </p>
                            <p>1. OMS identification. The goal is to obtain an OMS information model in the form of MTF.
                                Stages of implementation:</p>
                            <ul>
                                <li className="ml-4">submission of test signals to the inputs of the OMS (horizontally,
                                    vertically, diagonally);
                                </li>
                                <li className="ml-4">measurement of OMS responses to test signals with the help of an
                                    Eye-Tracker;
                                </li>
                            </ul>
                        </div>
                        <picture className="image-container-about col-xl-6 col-lg-6 d-xl-block d-lg-block d-none">
                            <div className="img"></div>
                        </picture>
                        <div className="description col-12">
                            <p>2. Building a diagnostic model of OMS. The goal is the formation of the feature space.
                                Stages of implementation:</p>
                            <ul>
                                <li className="ml-4">MTF compression;</li>
                                <li className="ml-4">determination of the diagnostic value of symptoms;</li>
                                <li className="ml-4">selection of the optimal system of signs - reduction of the
                                    diagnostic model.
                                </li>
                            </ul>
                            <p>3. Building a classifier of the psycho-physiological state of the individual based on the
                                OMS model. The goal is to build a family of decision rules for optimal classification.
                                Stages of implementation: </p>
                            <ul>
                                <li className="ml-4">building decision rules based on OMS identification results -
                                    training;
                                </li>
                                <li className="ml-4">assessment of the accuracy of the classification - the exam;</li>
                                <li className="ml-4">optimization of the diagnostic model.</li>
                            </ul>
                            <p>4. OMS Diagnostics. The goal is to assess the condition of the individual. Stages of
                                implementation: </p>
                            <ul>
                                <li className="ml-4">OMS identification;</li>
                                <li className="ml-4">evaluation of diagnostic features;</li>
                                <li className="ml-4">recognition – the assignment of the studied individual to a particular class.</li>
                            </ul>
                        </div>

                    </article>

                    {/*<article className="row">*/}
                    {/*    <div className="col text-center">*/}
                    {/*        <ul>*/}
                    {/*            <li className="btn btn-dark px-5"><Link to="#">Learn more</Link></li>*/}
                    {/*        </ul>*/}
                    {/*    </div>*/}
                    {/*</article>*/}
                </div>
            </section>
        );
    }
}

export default About;
