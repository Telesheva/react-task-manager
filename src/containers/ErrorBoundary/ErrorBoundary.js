import React from "react";

export default class ErrorBoundary extends React.Component {

    state = {
        hasError: false
    };

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return <h2 style={{
                color: '#1d1195',
                textAlign: 'center',
                paddingTop: 50
            }}> Oops..something went wrong! Check your connection and try again!
            </h2>
        } else {
            return this.props.children;
        }
    }
}