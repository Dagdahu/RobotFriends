import React from 'react';

class ErrorBoundry extends React.Component {
    constructor() {
        super();
        this.state = {
            hasError: false,
            error:''
        }
    }

    componentDidCatch(error, info) {
        this.setState({
            hasError:true,
            error:error
        })
    }

    render() {
        return this.state.hasError ?
            <h1>
                Oooops, an error has occured : {this.state.error}
            </h1>
            :
            this.props.children;
    }
}

export default ErrorBoundry;