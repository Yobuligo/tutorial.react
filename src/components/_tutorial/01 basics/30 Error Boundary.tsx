import { Component, ErrorInfo } from "react";

// Bubbling errors or handle errors are hardly possible for functional components.
// Instead you need a class and override method componentDidCatch(error){}. That class is a normal React component.
// This means it can be embedded in other components and can write errors to a console or whatever is required to handle the error.

interface IErrorBoundaryComponent {
  hasError: boolean;
  children: React.ReactNode;
}

export class ErrorBoundaryComponent extends Component<
  IErrorBoundaryComponent,
  IErrorBoundaryComponent
> {
  constructor() {
    super({ hasError: false, children: [] });
    this.state = { hasError: false, children: [] };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log(error);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong!</p>;
    }

    return this.props.children;
  }
}
