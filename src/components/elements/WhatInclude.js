import React, {Component} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';


class WhatInclude extends Component {
    render() {
        return (
            <section className="l-what-include mb-5">
                <div className="container">
                    <Tabs className="row justify-content-between">
                        <TabList className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <Tab className="hexagon first-hex"><p>Medicine</p></Tab>
                            <Tab className="hexagon second-hex"><p>Diagnostic</p></Tab>
                            <Tab className="hexagon third-hex text-center"><p>Research</p></Tab>
                        </TabList>

                        <div className="d-flex col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <TabPanel>
                                <div>
                                    <h3>Medicine</h3>
                                    <p>Medicine (diagnosis of Parkinson's disease stage, diagnosis of Schizophrenia,
                                        post-traumatic stress disorder, diagnosis in psychiatry, neurology,
                                        ophthalmology).</p>
                                    <p>Medical organizations (for diagnosis in psychiatry, neurology, ophthalmology, in
                                        neurosurgery to determine the state of fatigue of the surgeon).</p>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div>
                                    <h3>Diagnostic</h3>
                                    <p>Airlines (objective control of the pilots states before the flight to reduce the risk
                                        of human factors).</p>
                                    <p>Military structures (professional selection in special units, in aviation).</p>
                                    <p>Centers of Experimental Psychology (psychodiagnostics of personality, cognitive
                                        processes);</p>
                                    <p>Sports organizations (in the training process of athletes in preparation for the
                                        competition);</p>
                                    <p>Biometrics (for authentication).</p>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div>
                                    <h3>Research</h3>
                                    <p>information TBA</p>
                                </div>
                            </TabPanel>
                        </div>
                    </Tabs>
                </div>
                <h2 className="section-title text-center h2-line pt-2">Short facts</h2>
            </section>
        );
    }
}

export default WhatInclude;