import React, { Component } from 'react';


class HeaderBanner extends Component {
    render() {
        return (
            <section className="l-header-banner">
                <h1>Polytech Lab</h1>
                <div className="animation">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                         xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         viewBox="0 0 1000 1000" style-prop-object="enable-background:new 0 0 1000 1000;" space="preserve">
                        <circle className="st0" cx="500" cy="500" r="302.8">
                      <animateTransform attributeType="xml"
                                        attributeName="transform"
                                        type="rotate"
                                        from="0 500 500"
                                        to="360 500 500"
                                        dur="100s"
                                        repeatCount="indefinite"/>
                    </circle>
                        <circle className="st1" cx="500" cy="500" r="237.7">
                        <animateTransform attributeType="xml"
                                          attributeName="transform"
                                          type="rotate"
                                          from="0 500 500"
                                          to="360 500 500"
                                          dur="40s"
                                          repeatCount="indefinite"/>
                    </circle>
                        <circle className="st2" cx="500" cy="500" r="366.8" transform="rotate(0 500 500)">
                        <animateTransform attributeType="xml"
                                          attributeName="transform"
                                          type="rotate"
                                          from="0 500 500"
                                          to="-360 500 500"
                                          dur="50s"
                                          repeatCount="indefinite"/>
                    </circle>
                    <circle className="st3" cx="500" cy="500" r="385.1"/>
                </svg>
            </div>
            </section>
        );
    }
}

export default HeaderBanner;