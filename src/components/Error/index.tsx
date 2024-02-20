import React, { Component } from "react";

interface IState {
    
}
interface IProps {
    children: any
}

class ErrorBoundary extends Component<IProps, IState> {
    constructor(props: IProps) {
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
