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

/**
 * Error Boundary component to catch and handle React errors gracefully
 * Prevents the entire app from crashing when a component throws an error
 */
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
          className="flex flex-col items-center justify-center min-h-screen p-4"
          style={{
            backgroundColor: "var(--background)",
            color: "var(--text-primary)",
          }}
        >
          <div
            className="max-w-md w-full p-6 text-center"
            style={{
              backgroundColor: "var(--bg-card)",
              borderRadius: "var(--outer-radius)",
              border: "var(--thin-border)",
            }}
          >
            <h1 className="text-2xl font-semibold mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
              We&apos;re sorry for the inconvenience. An unexpected error has
              occurred.
            </p>
            {process.env.NODE_ENV === "development" && this.state.error && (
              <details className="mb-6 text-left">
                <summary
                  className="cursor-pointer text-sm font-medium mb-2"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Error details
                </summary>
                <pre
                  className="text-xs p-4 overflow-auto"
                  style={{
                    backgroundColor: "var(--bg-code)",
                    borderRadius: "var(--radius-md)",
                    color: "var(--text-code)",
                  }}
                >
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
            <button
              onClick={this.handleReset}
              className="px-4 py-2 text-sm font-medium transition-opacity hover:opacity-80"
              style={{
                backgroundColor: "var(--bg-button)",
                color: "var(--text-primary)",
                borderRadius: "var(--outer-radius)",
                border: "var(--thin-border)",
              }}
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
