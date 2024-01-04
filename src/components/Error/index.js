import React, { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.log("ErrorBoundary: ", error);
        console.log("ErrorBoundary: ", info);
    }

    render() {
        return this.props.children;
    }
}

export default React.memo(ErrorBoundary);
