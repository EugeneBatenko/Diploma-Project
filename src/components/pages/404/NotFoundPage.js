import React, {Component} from 'react';
import { Link } from "react-router-dom";

class NotFoundPage extends Component {
    render() {
        return (
            <div className="not-found-page-container">
                <div className="container px-0">
                    <div className="row flex-column justify-content-center align-items-center not-found-page">
                        <h2>404</h2>
                        <h3 className="mb-3">Error</h3>
                        <Link className="btn btn-warning" to="/">Go home</Link>
                    </div>
                    <div className="row flex-column justify-content-center align-items-center">
                        <h5>This page was lost in desert</h5>
                        <p>Please, check the URL</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default NotFoundPage;