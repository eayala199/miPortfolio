import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from '../src/Redux/Store/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const rootElement = ReactDOM.createRoot(document.getElementById('root'));

rootElement.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
);

reportWebVitals();
