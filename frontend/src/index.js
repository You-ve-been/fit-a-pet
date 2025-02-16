import './index.css';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './interceptors/axios';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
reportWebVitals();