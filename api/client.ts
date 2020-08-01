import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { AsyncStorage } from 'react-native';

const httpLink = createHttpLink({
  uri: 'http://localhost:8080/graphql',
});

const authLink = setContext(async (_, { headers }) => {
  // get the authentication token from local storage if it exists

  const token = await AsyncStorage.getItem('token');

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  };
});

const link = authLink.concat(httpLink);

export const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache,
});

export default client;
