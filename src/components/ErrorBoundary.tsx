"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div
          className="flex flex-col items-center justify-center min-h-screen p-4 bg-background text-foreground"
        >
          <div
            className="max-w-md w-full p-6 text-center bg-card rounded-3xl border border-border"
          >
            <h1 className="text-2xl font-semibold mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-sm mb-6 text-muted-foreground">
              We&apos;re sorry for the inconvenience. An unexpected error has
              occurred.
            </p>
            {process.env.NODE_ENV === "development" && this.state.error && (
              <details className="mb-6 text-left">
                <summary
                  className="cursor-pointer text-sm font-medium mb-2 text-muted-foreground"
                >
                  Error details
                </summary>
                <pre
                  className="text-xs p-4 overflow-auto bg-muted rounded-md text-muted-foreground"
                >
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
            <button
              onClick={this.handleReset}
              className="px-4 py-2 text-sm font-medium transition-opacity hover:opacity-80 bg-primary text-primary-foreground rounded-3xl border border-border"
            >
              Try again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
