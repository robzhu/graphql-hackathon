import { ApolloClient, createNetworkInterface } from 'apollo-client';

const networkInterface = createNetworkInterface({ uri: 'http://localhost:5000' });

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: r => r['id'],
});

export function provideClient(): ApolloClient {
  return client;
}
