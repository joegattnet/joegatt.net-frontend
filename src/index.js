import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloClient } from 'apollo-client';
import { ApolloLink, Observable } from 'apollo-link';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloProviderHooks } from 'react-apollo-hooks';
import { BrowserRouter } from 'react-router-dom'
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';
import { withClientState } from 'apollo-link-state';

import App from './App';

const cache = new InMemoryCache({
  cacheRedirects: {
    Query: {
      movie: (_, { id }, { getCacheKey }) =>
        getCacheKey({ __typename: 'Movie', id })
    }
  }
});

const request = async (operation) => {
  const token = await localStorage.getItem('authToken');
  if (!!token) {
    operation.setContext({
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
};

const requestLink = new ApolloLink((operation, forward) =>
  new Observable(observer => {
    let handle;
    Promise.resolve(operation)
      .then(oper => request(oper))
      .then(() => {
        handle = forward(operation).subscribe({
          next: observer.next.bind(observer),
          error: observer.error.bind(observer),
          complete: observer.complete.bind(observer),
        });
      })
      .catch(observer.error.bind(observer));

    return () => {
      if (handle) handle.unsubscribe();
    };
  })
);

export const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        console.log(graphQLErrors);
        // sendToLoggingService(graphQLErrors);
      }
      if (networkError) {
        console.log(networkError);
        // logoutUser();
      }
    }),
    requestLink,
    withClientState({
      defaults: {
        isConnected: true
      },
      resolvers: {
        Mutation: {
          updateNetworkStatus: (_, { isConnected }, { cache }) => {
            cache.writeData({ data: { isConnected }});
            return null;
          }
        }
      },
      cache
    }),
    new HttpLink({
      uri: '/graphql',
      credentials: 'same-origin'
    })
  ]),
  cache
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ApolloProviderHooks client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProviderHooks>
  </ApolloProvider>,
  document.getElementById('root')
);
