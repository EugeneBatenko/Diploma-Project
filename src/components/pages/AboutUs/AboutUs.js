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
                    <section className="l-about-us">
                        <div className="container pb-5">

                            <h2 className="section-title text-center h2-line">About Us</h2>
                            <h3 className="text-center mb-5">What writes about us in the media</h3>

                            <div className="row">

                                <div className="col-12">
                                    <h4 className="text-center">The startup of Ukrainian students will help diagnose
                                        stress disorder in the
                                        eyes</h4>
                                    <picture className="d-flex border-opacity-img">
                                        <img className="my-4 text-center w-75 h-75 mx-auto" src={Img1} alt="img1"/>
                                    </picture>

                                    <p>Post-traumatic stress disorders (PTSD)
                                        can be diagnosed by the movement of the eye. Ukrainian physicians, military and
                                        IT-experts who presented a new method of objective diagnosis of the disease,
                                        made this conclusion. Automation of research data processing was provided by the
                                        “Eye-tracking technology in medical trials” startup, developed by a team of
                                        Ukrainian students as part of CIG R&D LAB - a joint scholarship program of the
                                        Chernovetskyi Investment Group and the Odessa National Polytechnic University
                                        (ONPU).</p>
                                    <p>At the end of November, the military doctors of the Psychiatric Clinic of the
                                        Main Military Clinical Hospital together with specialists from the Filatov
                                        Institute of Eye Diseases and Tissue Therapy of the National Academy of Medical
                                        Sciences of Ukraine, polygraph examiners from HR-Security and representatives of
                                        ONPU conducted experimental studies. Experts examined patients diagnosed with
                                        PTSD and participants from the control group in order to record the activity of
                                        their oculomotor system. This made it possible to identify characteristic
                                        symptoms inherent in such state. The findings confirmed the hypothesis of
                                        scientists that patients with PTSD have certain eye movement patterns.</p>

                                    <p>The new method of early objective hardware diagnosis of the disease will provide
                                        an opportunity to diagnose PTSD in due time, and provide the necessary
                                        assistance to our military personnel. In addition, the invented method can be
                                        applied to detect the drivers’ fatigue states, in staff recruitment and in many
                                        other areas.</p>

                                    <blockquote>“Technologies allow accurately register various physiological
                                        parameters. The next step is data processing and its interpretation. That is,
                                        you can register eye movement with eye-tracker, and then analyze it on a
                                        particular human state. When we can form reference indicators for one or another
                                        state, we will get a full-fledged hardware-software system for express
                                        diagnostics. In this, programmers and engineers can help doctors significantly.
                                        A further field of application of the development can be very broad, but today
                                        we have confirmed that this is possible,” said one of the developers of the
                                        methodology, D.Sc. in Engineering, Professor <strong>Yuryi Danik</strong>.
                                    </blockquote>

                                    <blockquote>Military physicians plan to use the results of research to predict the
                                        state of military personnel who have already taken part in hostilities and are
                                        currently in reserve.
                                        “If we can assess their state and provide our
                                            recommendations, it will be invaluable work. PTSD is a disorder that
                                            deteriorates a person’s life quality for the long haul. If the physicians
                                            succeed in identifying it in time, the treatment will be much more
                                            successful.
                                            Quite often people do not realize they are suffering from this disease.
                                            Their
                                            relatives and friends notice the disease manifestation, but it is sometimes
                                            difficult to persuade people with PTSD to undergo a course of treatment,
                                            mainly
                                            when the disease pattern develops. New diagnostic methods allow us to detect
                                            PTSD at the early stages and start treating it in time,” says
                                        the head of the
                                        Psychiatric Clinic of the Main Military Clinical Hospital, MD,
                                        psychiatrist <strong>Oleg
                                            Druz</strong>.
                                    </blockquote>

                                    <blockquote>This technology is an essential component of support for our military personnel.
                                        <strong>Natalia Pasechnikova</strong>, a corresponding member of the National
                                        Academy of Sciences
                                        of Ukraine, MD, professor, head of the Filatov Institute of Eye Diseases and
                                        Tissue Therapy also drew attention to that:
                                        “Before now, military
                                            expert
                                            personnel was significantly reduced, therefore, currently, each specialist
                                            is
                                            worth his weight in gold. If such diseases are detected in time, the
                                            military
                                            can be rehabilitated as soon as possible. This project is a vivid example of
                                            how
                                            to do things efficiently. Even without government procurements, thanks to
                                            such
                                            young IT specialists, such scholarship projects and the CIG foundation, we
                                            can
                                            do more.”</blockquote>

                                    <blockquote>
                                        “The eye-tracking technology is widely used all over the world:
                                            equally for
                                            scientific-research and clinical purposes. This method allows objectifying
                                            what
                                            is observed subjectively. Now the whole world is trying to cease subjective
                                            assessment and eliminate the human factor in the diagnosis of disorders.
                                            Therefore, our research is relevant not only in ophthalmology but also in
                                            related medical fields,”

                                        said <strong>Alexandra Zborovskaya</strong>, MD, an ophthalmologist at
                                        the Filatov Institute of Eye Diseases and Tissue Therapy.
                                    </blockquote>

                                    <picture className="d-flex border-opacity-img">
                                        <img className="my-4 text-center w-75 h-75 mx-auto" src={Img2} alt="img2"/>
                                    </picture>

                                    <blockquote>Developers from ONPU want to apply their original data processing method for
                                        analyzing the results of eye tracking.
                                        “We use a fairly simple
                                            method: we send a
                                            visual stimulus on a computer screen, a person tracks the points on the
                                            screen,
                                            and his pupillary responses are recorded in the memory of the eye tracker.
                                            Then
                                            we process the data and draw conclusions about the human state: this is the
                                            norm
                                            or beyond the norm. With the support of CIG, we conducted an experiment at
                                            The
                                            Center for Innovation and Advanced Technologies of the Lublin University of
                                            Technology in Poland, where we worked with the eye tracker to determine the
                                            degree of fatigue among students before and at the end of the day. On
                                            analyzing
                                            the results, we realized that the indicators are significantly different.
                                            Our
                                            first calculations were accurate to 93%: evidence that the methodology
                                            works,”

                                        notes <strong>Vitaly Pavlenko</strong>, the scientific director of the student
                                        developers’ team,
                                        Professor at ONPU.
                                    </blockquote>

                                    <blockquote>“Modern challenges encourage military and civilian physicians to unite together
                                        their efforts. Our cooperation with the specialists of the Filatov Institute of
                                        Eye Diseases and Tissue Therapy of the National Academy of Medical Sciences of
                                        Ukraine is an important example of an effective work in the medical area. During
                                        the war, we had patients whose diseases we had not encountered before, including
                                        patients with post-traumatic stress disorders caused by staying in the combat
                                        zone. Previously, there were no hardware tools for diagnosing these states and
                                        no effective methods for processing the results of such particular measurements.
                                        Therefore, it is essential for us to use the methodology proposed by young IT
                                        specialists. We are grateful to CIG for supporting innovative researches, which
                                        will significantly help physicians and will influence the strengthening of our
                                        country's defense capability,” said the head of the Main Military Clinical
                                        Hospital, MD, Major General <strong>Anatoly Kazmirchuk</strong>.</blockquote>

                                    <p>Chernovetskyi Investment Group (CIG) <a
                                        href="http://cig.vc/en/new/studenceskij-startap-pomogaet-v-diagnostike-posttravmaticeskih-stressovyh-rasstrojstv">Link
                                        to original</a></p>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <h3 className="ml-3">Another news about our project</h3>
                                        <ul className="ml-5">
                                            <li><a href="https://24tv.ua/health/ru/startap_ukrainskih_studentov_pomozhet_diagnostirovat_stressovye_rasstrojstva_po_glazam_n1076916">Startup Ukrainian students will help diagnose stress disorders in the eyes</a></li>
                                            <li><a
                                                href="https://people.in.ua/2018/12/life/studentskij-startap-dopomozhe-vijskovim-medikam-u-diagnostuvanni-posttravmatichnih-stresovih-rozladiv/">Student
                                                Startup Helps Military Physicians in Diagnosing Post-Traumatic Stress
                                                Disorders</a></li>
                                            <li><a href="http://uaport.net/news/ua/t/1812/09/20921175">Ukrainian startup
                                                will allow to diagnose stress disorders in the eyes</a></li>
                                            <li><a
                                                href="http://cig.vc/new/studenceskij-startap-pomogaet-v-diagnostike-posttravmaticeskih-stressovyh-rasstrojstv">Student
                                                startup helps in the diagnosis of post-traumatic stress disorders</a>
                                            </li>
                                            <li><a href="https://uazmi.net/news/post/cv32OAaYR4wWwRNn9YTLMY">The startup
                                                of Ukrainian students helps diagnose stress disorder through the
                                                eyes</a></li>
                                        </ul>


                                    </div>
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