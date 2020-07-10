import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false
        }
    }

    // how do we change the value for hasError?? --- componentDidCatch, which is a life cycle element.
    componentDidCatch(error, info) {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <h1>Oops!</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;