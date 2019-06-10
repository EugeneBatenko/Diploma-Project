import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from "react-router-dom";
//Pages
import MainPage from './components/pages/MainPage/MainPage';
import Instruments from './components/pages/Instruments/Instruments';
import TimeLine from "./components/pages/TimeLine/TimeLine";
import Awards from "./components/pages/Awards/Awards";
import AboutUs from "./components/pages/AboutUs/AboutUs";
import PublicationsPage from "./components/pages/Publications/PublicationsPage";
import ResultPage from "./components/pages/Result/ResultPage";
import NotFoundPage from "./components/pages/404/NotFoundPage";

//Styles and node-modules
import '../node_modules/bootstrap/scss/bootstrap.scss';
import "../node_modules/slick-carousel/slick/slick.scss";
import "../node_modules/slick-carousel/slick/slick-theme.scss";
import './scss/main.scss';

ReactDOM.render((
    <Router>
        <Route exact path="/" component={MainPage} />
        <Route path="/Publications" component={PublicationsPage}/>
        <Route path="/Instruments" component={Instruments}/>
        <Route path="/Result" component={ResultPage}/>
        <Route path="/Timeline" component={TimeLine}/>
        <Route path="/Awards" component={Awards}/>
        <Route path="/AboutUs" component={AboutUs}/>
        <Route component={NotFoundPage}/>
        {/*<Redirect from="*" to="/404" />*/}
    </Router>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

