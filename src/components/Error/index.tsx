import React, { Component } from "react";

type tProps = {
    children: any
}

class ErrorBoundary extends Component<tProps, {}> {
    constructor(props: tProps) {
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
