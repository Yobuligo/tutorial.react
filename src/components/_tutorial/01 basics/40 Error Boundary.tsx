import React, { ReactNode } from "react";

/**
 * Bubbling errors or handle errors are hardly possible for functional components.
 * Instead you need a class and override method componentDidCatch(error){}. That class is a normal React component.
 * This means it can be embedded in other components and can write errors to a console or whatever is required to handle the error.
 */

export class ErrorBoundary extends React.Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  /**
   * This method is called in case of an error. It can be used to recognize that an error occurs.
   */
  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  /**
   * This method is also called in case of an error. This is normally used for logging the error and the errorInfos (call stack, etc.)
   */
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log(error, errorInfo);
  }

  /**
   * The render method simply decides if the children is rendered or in case of an error, what should be printed
   */
  render(): React.ReactNode {
    if (this.state.hasError) {
      return <>Error occurred</>;
    } else {
      return this.props.children;
    }
  }
}

const ThrowingChildComponent: React.FC = () => {
  throw new Error("Throwing an error for free");
};

const ErrorBoundaryComponent: React.FC = () => {
  return (
    <ErrorBoundary>
      <ThrowingChildComponent />
    </ErrorBoundary>
  );
};

export default ErrorBoundaryComponent;
