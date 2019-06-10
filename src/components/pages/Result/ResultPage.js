import React, {Component} from 'react';
import ScrollToTop from "../../elements/ScrollToTop";
import Header from "../../elements/Header";
import Footer from "../../elements/Footer";
import Result from "../../elements/Result";

class ResultPage extends Component {
    render() {
        return (
            <div className="container-wrapper">
                <ScrollToTop/>
                <Header/>
                <main>
                    <Result/>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default ResultPage;