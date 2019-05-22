import React, {Component} from 'react';
import Header from '../../elements/Header';
import Footer from "../../elements/Footer";
import ScrollToTop from "../../elements/ScrollToTop";
//Img
import Img1 from "../../../img/news/news-img1.jpg";
import Img2 from "../../../img/news/news-img2.jpg";

class AboutUs extends Component {
    render() {
        return (
            <div className="container-wrapper">
                <ScrollToTop/>
                <Header/>
                <main>
                    <section className="container mt-5 pt-5">

                        <h2 className="section-title text-center h2-line">About Us</h2>
                        <h3 className="text-center mb-5">What writes about us in the media</h3>

                        <div className="row">

                            <div className="col-12">
                                <h4>The startup of Ukrainian students will help diagnose stress disorder in the
                                    eyes</h4>
                                <picture className="d-flex">
                                    <img className="my-4 text-center w-75 h-75 mx-auto" src={Img1} alt="img1"/>
                                </picture>

                                <p className="description font-weight-bold">By the motion of the eye, you can diagnose
                                    post-traumatic
                                    stress disorder (PTSD). Such conclusion was reached by Ukrainian doctors, military
                                    and IT specialists, who presented a new method of objective hardware diagnostics of
                                    the disease. This technique will allow you to timely diagnose PTSD and provide
                                    assistance to servicemen.</p>
                                <p>The automation of data processing was provided by the Aitreking in Medical Research
                                    Startup, developed by a team of Ukrainian students in the framework of CIG R & D
                                    LAB, a joint scholarship program of Chernovetsky Investment Group (CIG) and Odessa
                                    National Polytechnic University (ONPU).</p>
                                <blockquote>"Technologies allow us to fix various physiological parameters in detail,
                                    the rest is
                                    a matter of data processing and interpretation, that is, it is possible to fix the
                                    motion of an eye by aitrequemer and then to analyze it according to a certain state
                                    of a person. When we can form indicators-" standards "for one or another state, we
                                    will get a complete software and hardware complex for express diagnostics, which can
                                    be of great help to doctors and programmers and engineers. The further field of
                                    application development can be broad, but at the moment we confirmed that it is
                                    possible ", - noted one of the developers of the methodology, doctor of technical
                                    sciences, professor Yuriy Danik.
                                </blockquote>

                                <picture className="d-flex">
                                    <img className="my-4 text-center w-75 h-75 mx-auto" src={Img2} alt="img2"/>
                                </picture>

                                <p>Military doctors plan to use research findings to predict the status of military
                                    personnel who participated in hostilities, and are now in reserve.</p>

                                <blockquote className="font-weight-bold">

                                    Systema aytrekinhu shyroko vykorystovuyetʹsya u sviti: 50/50 u naukovo-doslidnykh ta
                                    klinichnykh tsilyakh. Tsey metod daye zmohu obʺyektyvizuvaty te, shcho mozhna
                                    sposterihaty subʺyektyvno. Narazi medytsyna prahne vidiyty vid subʺyektyvnoho
                                    otsinyuvannya, vyluchyty lyudsʹkyy faktor u diahnostuvanni patolohiy. Tomu nashe
                                    doslidzhennya aktualʹne ne lyshe v oftalʹmolohiyi, a y u sumizhnykh medychnykh
                                    sferakh",
                                    – zauvazhyla doktor medychnykh nauk Instytutu ochnykh khvorob i tkanynnoyi terapiyi
                                    imeni V.P. Filatova NAMN Ukrayiny Oleksandra Zborovsʹka.
                                    Показати більше
                                    508/5000
                                    Aitreking system is widely used in the world: 50/50 for research and clinical
                                    purposes. This method allows you to objectify what you can observe subjectively.
                                    Currently, medicine seeks to move away from subjective evaluation, to remove the
                                    human factor in the diagnosis of pathologies. Therefore, our research is relevant
                                    not only in ophthalmology, but also in related medical spheres ",<br/>
                                    - noted the doctor of medical sciences of the Institute of eye diseases and tissue
                                    therapy named after VP Filatov NAMS Ukraine Alexander Zborovsky.
                                </blockquote>

                                <p>24tv.ua <a
                                    href="https://24tv.ua/health/startap_ukrayinskih_studentiv_dopomozhe_diagnostuvati_stresovi_rozladi_za_ochami_n1076675">Link
                                    to original</a></p>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <h3>Another news about our project</h3>
                                    <ul className="ml-5">
                                        <li><a
                                            href="https://people.in.ua/2018/12/life/studentskij-startap-dopomozhe-vijskovim-medikam-u-diagnostuvanni-posttravmatichnih-stresovih-rozladiv/">Student
                                            Startup Helps Military Physicians in Diagnosing Post-Traumatic Stress
                                            Disorders</a></li>
                                        <li><a href="http://uaport.net/news/ua/t/1812/09/20921175">Ukrainian startup
                                            will allow to diagnose stress disorders in the eyes</a></li>
                                        <li><a href="http://cig.vc/new/studenceskij-startap-pomogaet-v-diagnostike-posttravmaticeskih-stressovyh-rasstrojstv">Student startup helps in the diagnosis of post-traumatic stress disorders</a></li>
                                    </ul>


                                </div>
                            </div>


                        </div>

                    </section>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default AboutUs;