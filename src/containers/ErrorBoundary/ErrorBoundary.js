import React from "react";
import {NavLink} from "react-router-dom";

export default class ErrorBoundary extends React.Component {

    state = {
        hasError: false
    };

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return (
                <>
                    <h2 style={{
                        color: '#1d1195',
                        textAlign: 'center',
                        paddingTop: 50
                    }}> Oops..something went wrong! Check your connection and try again!
                    </h2>
                    <NavLink
                        to={'/auth'}
                        style={{
                            fontSize: '23px',
                            marginLeft: '45%',
                            cursor: 'pointer'
                        }}
                    >Or log into your account</NavLink>
                </>
            )
        } else {
            return this.props.children;
        }
    }
}