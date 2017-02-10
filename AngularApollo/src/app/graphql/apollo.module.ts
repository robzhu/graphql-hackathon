import { ApolloModule } from 'apollo-angular';
import { ApolloClient, createNetworkInterface } from 'apollo-client';

export const ApolloModuleInst = ApolloModule.withClient(getClient);

export function getClient() {
  return new ApolloClient({
    networkInterface: createNetworkInterface({
      uri: 'http://localhost:5000',
      opts: {
        credentials: 'same-origin',
      },
    }),
    dataIdFromObject: o => o['id'],
  });
}
