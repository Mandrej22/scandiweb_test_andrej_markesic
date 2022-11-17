import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';


export const client = new ApolloClient({
  uri:"http://localhost:4000",
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </ApolloProvider>
  </React.StrictMode>
);
