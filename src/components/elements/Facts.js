import React, { Component } from 'react';
import CountUp from 'react-countup';



class Facts extends Component {
    render() {
        return (
            <section className="l-facts d-flex flex-column align-content-center justify-content-center mb-5">

                <div className="row align-content-center justify-content-around num-container">
                    <div className="m-numbers col">
                        <h2 className="m-numbers__counter">
                            <CountUp className="count" time={2000} delay={3} end={93}/><span>%</span>
                        </h2>
                        <span>accuracy</span>
                    </div>
                    <div className="m-numbers col">
                        <h2 className="m-numbers__counter">
                            <CountUp className="count" time={2000} delay={3} end={522}/>
                        </h2>
                        <span>number of experiments</span>
                    </div>
                    <div className="m-numbers col">
                        <h2 className="m-numbers__counter">
                            <CountUp className="count" time={2000} delay={3} end={34}/>
                        </h2>
                        <span>people are diagnosed</span>
                    </div>
                    <div className="m-numbers col">
                        <h2 className="m-numbers__counter">
                            <CountUp className="count" time={2000} delay={3} end={20}/>
                        </h2>
                        <span>publications</span>
                    </div>
                    <div className="m-numbers col">
                        <h2 className="m-numbers__counter">
                            <CountUp className="count" time={2000} delay={3} end={7}/>
                        </h2>
                        <span>members</span>
                    </div>
                </div>
            </section>

        );
    }
}

export default Facts;