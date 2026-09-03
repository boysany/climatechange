import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import ErrorBoundary from './components/ErrorBoundary.tsx';

const mountNode = document.getElementById('root');

if (mountNode) {
  try {
    const root = ReactDOM.createRoot(mountNode);
    root.render(
      <React.StrictMode>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </React.StrictMode>
    );

    console.log('CCDL Studio: System online. Typography & scroll engine initialized.');
  } catch (error) {
    console.error('CCDL Studio Mount Error:', error);
    mountNode.innerHTML = `
      <div style="height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:monospace;text-align:center;padding:20px;background:#0a0a0c;color:#f4f3ef;">
        <h1 style="color:#00f0ff;font-size:18px;letter-spacing:0.1em;">CCDL / SYNCHRONIZATION NOTICE</h1>
        <p style="color:#888;margin-top:10px;font-size:13px;">Please refresh the page to clear the cache.</p>
        <button onclick="window.location.reload()" style="margin-top:20px;padding:8px 24px;background:#f4f3ef;color:#0a0a0c;border-radius:50px;border:none;cursor:pointer;font-family:monospace;font-weight:600;">Refresh</button>
      </div>
    `;
  }
}
