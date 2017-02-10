# GraphQL Server in TypeScript

This is a starter repo that was originally recreated for a GraphQL Hackathon at Facebook. 

## Getting Started

1. Go to server-typescript directory in your terminal
1. `npm i -g nodemon concurrently typescript tslint`
1. `npm i`
1. `npm run build`
1. `npm start`
1. Verify your server by running `curl localhost:5000 -d "query={authors{id,name, books{id}}}"`
