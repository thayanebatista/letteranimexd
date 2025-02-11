import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import client from './graphql/client/default';
import reportWebVitals from './reportWebVitals';

import { ApolloProvider } from '@apollo/client';
import { HashRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
