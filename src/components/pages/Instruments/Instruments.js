import React, {Component} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
//Elements
import Header from '../../elements/Header';
import Footer from "../../elements/Footer";
//Images
import EyeTribeImg from "../../../img/instruments/instrument1.jpg"
import TobiiImg from "../../../img/instruments/instrument2.jpg"
import GP from "../../../img/instruments/instrument3.jpg"
// import Matlab from "../../../img/instruments/content_matlab-simulink_logo.jpg"
//Scroll restore
import ScrollToTop from "../../elements/ScrollToTop";

class Instruments extends Component {
    render() {
        return (
            <div className="container-wrapper">
                <ScrollToTop/>
                <Header/>
                <main>
                    <section className="l-instruments">

                        <div className="image-container">
                            <h2 className="section-title text-center mt-5 h2-line">Instruments what we use</h2>
                            <p className="text-white">The following instrumental algorithmic and software tools are
                                developed when the Project is implemented:</p>
                        </div>

                        <Tabs className="d-flex tabs">
                            <TabList className="tab-nav">
                                <Tab className="tab-item">The EyeTribe Tracker</Tab>
                                <Tab className="tab-item">Tobii Pro Tracker</Tab>
                                <Tab className="tab-item">GP3 HD Eye Tracker</Tab>
                                {/*<Tab className="tab-item">Tab4</Tab>*/}
                                {/*<Tab className="tab-item">Tab5</Tab>*/}
                            </TabList>


                            <div className="tab-container">
                                <TabPanel className="tab-content">
                                    <h3>EYE TRACKER</h3>
                                    <div className="row">
                                        <div className="col-6">
                                            <img src={EyeTribeImg} alt="EyeTribeImg"/>
                                        </div>

                                        <div className="col-6">
                                            <p><strong>The EyeTribe (30/60 Hz)</strong> Masaryk University (Brno,
                                                Czechia)</p>
                                        </div>
                                    </div>

                                </TabPanel>
                                <TabPanel className="tab-content">
                                    <h3>Tobii Pro</h3>
                                    <div className="row">
                                        <div className="row">
                                            <div className="col-6">
                                                <img src={TobiiImg} alt="EyeTribeImg"/>
                                            </div>

                                            <div className="col-6">
                                                <p><strong>Tobii Pro TX300 (300 Hz)</strong> Lublin University of
                                                    Technology
                                                    (Lublin, Poland)</p>
                                            </div>
                                        </div>

                                    </div>
                                </TabPanel>
                                <TabPanel className="tab-content">
                                    <h3>GP3 HD Eye Tracker</h3>
                                    <div className="row">
                                        <div className="row">
                                            <div className="col-6">
                                                <img src={GP} alt="GP"/>
                                            </div>

                                            <div className="col-6">
                                                <p><strong>GP3 HD Eye Tracker 150Hz)</strong> The GP3 HD is a
                                                    research-grade eye tracker utilizing a machine-vision camera at the
                                                    heart of its imaging and processing system</p>
                                            </div>
                                        </div>

                                    </div>
                                </TabPanel>
                                {/*<TabPanel className="tab-content">*/}
                                {/*    <h3>Menu 4</h3>*/}
                                {/*    <p>visualization of data and processing results of experimental research;</p>*/}
                                {/*</TabPanel>*/}
                                {/*<TabPanel className="tab-content">*/}
                                {/*    <h3>Menu 5</h3>*/}
                                {/*    <p>classifiers construction using deterministic and statistical methods of*/}
                                {/*        learning the pattern recognition based on the data obtained using innovative*/}
                                {/*        tracking technology. </p>*/}
                                {/*</TabPanel>*/}
                            </div>
                        </Tabs>
                    </section>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default Instruments;