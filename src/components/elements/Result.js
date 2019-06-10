import React, {Component} from 'react';

class Result extends Component {
    state = {
        isLoading: true,
        table: [],
        error: null
    };

    fetchUsers() {
        fetch("http://testeyetracing.zzz.com.ua/server/result.php")
        // fetch("http://eyetracking/server/result.php")
            .then(response => response.json())
            .then(data =>
                this.setState({
                    table: data,
                    isLoading: false,
                })
            )
            .catch(error => this.setState({ error, isLoading: false }));
    }

    componentDidMount() {
        this.fetchUsers();
    }



    render() {


        const { isLoading, table, error } = this.state;
        return (
            <article className="l-publications l-result">
                <div className="bg-dark pt-5 pb-5 mb-5">
                    <h2 className="text-center text-white pt-5">Result</h2>
                </div>

                <div className="container">
                    {/*<input type="text" id="myInput" className="filter input-text w-100"*/}
                    {/*       placeholder="Search for names.." title="Type in a name"/>*/}
                    {error ? <p>{error.message}</p> : null}
                    {!isLoading ? (
                        table.map(result => {
                            const {id, year, name, describe } = result;
                            return (
                                <div className="db-row" key={id}>
                                    <p>Name: {year}</p>
                                    <p>Author: {name}</p>
                                    <p>Describe: {describe}</p>
                                </div>
                            );
                        })
                    ) : (
                        <h3>Loading...</h3>
                    )}
                </div>
            </article>
        );
    }
}

export default Result;