import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertOctagon, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('🛡️ ErrorBoundary caught an error:', error, errorInfo);
    
    this.setState({
      error,
      errorInfo,
    });

    // Optional: Send to error tracking service (e.g., Sentry)
    // if (window.errorTracker) {
    //   window.errorTracker.captureException(error, { extra: errorInfo });
    // }
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default fallback UI - Retro themed
      return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full">
            
            {/* Error Card */}
            <div className="bg-slate-800 border-4 border-red-500 shadow-[8px_8px_0px_0px_rgba(239,68,68,0.5)] p-6 md:p-8">
              
              {/* Header */}
              <div className="flex items-center gap-4 mb-6 pb-4 border-b-4 border-slate-700">
                <div className="p-3 bg-red-900 border-2 border-red-500">
                  <AlertOctagon className="w-8 h-8 md:w-12 md:h-12 text-red-400 animate-pulse" />
                </div>
                <div>
                  <h1 className="text-xl md:text-3xl font-bold text-red-400 font-['Press_Start_2P'] leading-tight">
                    SYSTEM_FAILURE
                  </h1>
                  <p className="text-slate-400 text-sm md:text-base font-mono mt-2">
                    Critical Error Detected
                  </p>
                </div>
              </div>

              {/* Error Message */}
              <div className="bg-black p-4 border-2 border-red-900/50 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-red-500 animate-pulse"></div>
                  <span className="text-red-400 font-['Press_Start_2P'] text-xs">ERROR_LOG:</span>
                </div>
                <p className="text-green-400 font-mono text-sm md:text-base break-words">
                  {this.state.error?.message || 'Unknown error occurred'}
                </p>
              </div>

              {/* Details (Collapsed by default) */}
              {this.state.errorInfo && (
                <details className="mb-6 bg-slate-900 border border-slate-700 p-3">
                  <summary className="cursor-pointer text-slate-400 font-['Press_Start_2P'] text-xs hover:text-slate-300">
                    [+] STACK_TRACE
                  </summary>
                  <pre className="mt-3 text-xs text-slate-500 overflow-x-auto font-mono">
                    {this.state.errorInfo.componentStack}
                  </pre>
                </details>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col md:flex-row gap-3">
                <button
                  onClick={this.handleReset}
                  className="flex-1 flex items-center justify-center gap-3 py-4 bg-blue-700 hover:bg-blue-600 text-white font-['Press_Start_2P'] text-sm border-b-4 border-blue-900 active:border-b-0 active:translate-y-1 transition-all"
                >
                  <Home className="w-5 h-5" />
                  TRY_AGAIN
                </button>
                <button
                  onClick={this.handleReload}
                  className="flex-1 flex items-center justify-center gap-3 py-4 bg-slate-700 hover:bg-slate-600 text-white font-['Press_Start_2P'] text-sm border-b-4 border-slate-900 active:border-b-0 active:translate-y-1 transition-all"
                >
                  <RefreshCw className="w-5 h-5" />
                  RELOAD_PAGE
                </button>
              </div>

              {/* Help Text */}
              <div className="mt-6 p-4 bg-slate-700/30 border-l-4 border-cyan-500">
                <p className="text-slate-300 text-sm font-['VT323'] text-lg leading-relaxed">
                  <strong className="text-cyan-400">RECOVERY_PROTOCOL:</strong>
                  <br />
                  • Try refreshing the page
                  <br />
                  • Clear browser cache (Ctrl+Shift+Delete)
                  <br />
                  • Check browser console for details (F12)
                  <br />
                  • If error persists, contact operator
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-4 text-center">
              <p className="text-slate-600 font-mono text-sm">
                PROJECT AGHOY • ERROR ID: {Date.now()}
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
