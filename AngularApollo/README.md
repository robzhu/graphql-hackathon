# GraphQL/Apollo/Angular Starter

This is a starter repo that was originally recreated for a GraphQL Hackathon at Facebook. 
It was based off the [general Hackathon repo](https://github.com/robzhu/graphql-hackathon) and
[Uri Goldstein's Apollo starter](https://github.com/apollographql/apollo-angular).

## Getting Started

1. `git clone git@github.com:jeffwhelpley/graphql-hackathon.git`
2. `cd graphql-hackathon`
3. `npm i -g lerna nodemon concurrently typescript tslint @angular/cli`
4. `lerna run build`
5. open up two terminal windows:
  * in one, cd to `packages/graphql-server` and then run `npm start`
  * in the other, cd to `packages/angular-client` and run `ng serve`
6. open your browser to [http://localhost:4200](http://localhost:4200)
