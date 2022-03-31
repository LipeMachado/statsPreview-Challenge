import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router} from 'react-router-dom';
import Routes from './router';
import { GlobalStyle } from './styledGlobal.jsx';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Routes />
    </Router>
  </React.StrictMode>
);