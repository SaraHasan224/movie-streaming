import { Component } from "react";

type ErrBProps = {
  children: any;
};

export class ErrorBoundary extends Component<ErrBProps, {}> {
  constructor(props: ErrBProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, info: any) {
    console.log("ErrorBoundary: ", error);
    console.log("ErrorBoundary: ", info);
  }

  render() {
    return this.props.children;
  }
}
