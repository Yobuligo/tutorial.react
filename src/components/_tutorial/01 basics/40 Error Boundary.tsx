import React, { ReactNode } from "react";

/**
 * Bubbling errors or handle errors are hardly possible for functional components.
 * Instead you need a class and override method componentDidCatch(error){}. That class is a normal React component.
 * This means it can be embedded in other components and can write errors to a console or whatever is required to handle the error.
 */

export class ErrorBoundary extends React.Component<
  { children: ReactNode; fallback?: ReactNode },
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
   * The render method simply decides if the children is rendered or in case of an error, what should be printed.
   * In addition, which is not necessary it is possible to provide a fallback component in case of an error.
   */
  render(): React.ReactNode {
    if (this.state.hasError) {
      return <>{this.props.fallback ?? <>An error occurred</>}</>;
    } else {
      return this.props.children;
    }
  }
}

const ThrowingChildComponent: React.FC = () => {
  throw new Error("Throwing an error for free");
};

const ErrorDetails: React.FC<{ message: string }> = (props) => {
  return <>{props.message}</>;
};

const ErrorBoundaryComponent: React.FC = () => {
  return (
    <ErrorBoundary fallback={<ErrorDetails message="An error occurred" />}>
      <ThrowingChildComponent />
    </ErrorBoundary>
  );
};

export default ErrorBoundaryComponent;
