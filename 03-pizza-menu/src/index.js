import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom'; -- Before React v18

function App() {
  return <h1>Hello React!</h1>;
}

// React v18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Before React v18
// ReactDOM.render(<App />, document.getElementById('root'));
