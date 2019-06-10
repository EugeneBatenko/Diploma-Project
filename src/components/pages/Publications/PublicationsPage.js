import React, {Component} from 'react';
import ScrollToTop from "../../elements/ScrollToTop";
import Header from "../../elements/Header";
import Footer from "../../elements/Footer";
import Publications from "../../elements/Publications";

class PublicationsPage extends Component {
    render() {
        return (
            <div className="container-wrapper">
                <ScrollToTop/>
                <Header/>
                <main>
                    <Publications/>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default PublicationsPage;