import React from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.warn('ErrorBoundary caught an error:', error, errorInfo);
  }

  private handleReload = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--display, sans-serif)',
            padding: '2rem',
            backgroundColor: '#0a0a0c',
            color: '#f4f3ef',
            textAlign: 'center',
          }}
        >
          <span
            style={{
              fontSize: '0.85rem',
              color: '#00f0ff',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            CCDL / System Notice
          </span>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: '0 0 1rem' }}>
            Experience Reload Required
          </h2>
          <p
            style={{
              maxWidth: '400px',
              color: '#999',
              fontSize: '0.9rem',
              lineHeight: 1.6,
              marginBottom: '1.5rem',
            }}
          >
            An unexpected interface event occurred. Please reload to restore the session.
          </p>
          <button
            onClick={this.handleReload}
            style={{
              padding: '0.75rem 1.75rem',
              backgroundColor: '#f4f3ef',
              color: '#0a0a0c',
              border: 'none',
              borderRadius: '999px',
              fontFamily: 'var(--display, sans-serif)',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Reload Experience
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
