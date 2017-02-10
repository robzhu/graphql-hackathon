import * as express from 'express';
import * as cors from 'cors';
import * as graphqlHTTP from 'express-graphql';
import * as auth from 'basic-auth';
import schema from './schema';

const app = express();

app.use(cors());
app.use('/', (req, res) => {
    graphqlHTTP({
        schema: schema,
        pretty: true,
        graphiql: true,
        rootValue: {
            user: auth(req)
        },
    })(req, res);
});

const port = process.env.NODE_ENV ? 80 : 5000;

app.listen(port, () => {
    console.log(`app started on port ${port}`);
});

// once app is started, execute queries like so:
// curl localhost:5000 -d "query={authors{id,name, books{id}}}"
