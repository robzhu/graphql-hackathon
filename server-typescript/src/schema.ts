import { makeExecutableSchema } from 'graphql-tools';
import { authors, books } from './db';

const schema = `
    type Author {
        id: String
        name: String
        image: String
        books: [Book]
    }
    type Book {
        id: String
        title: String
        image: String
        authorId: String
        description: String
        author: Author
    }
    input BookInput {
        id: String
        title: String
        image: String
        description: String
        authorId: String
    }
    type QueryRoot {
        authors: [Author]
        books: [Book]
        bookById(id: String!): Book
        bookSearch(keyword: String!): Book
        secret: String
    }
    type MutationRoot {
        addBook(book: BookInput!): Book
    }
    schema {
        query: QueryRoot
        mutation: MutationRoot
    }
`;

const resolvers = {
    Author: {
        id: (author: any) => `author-${author.id}`,
        books: (author: any) => {
            const authorsBooks = books.filter(
                book => book.authorId === author.id
            );
            return authorsBooks;
        }
    },
    Book: {
        id: (book: any) => `book-${book.id}`,
        author: (book: any) => authors[book.authorId]
    },
    QueryRoot: {
        authors: () => {
            return authors;
        },
        books: () => {
            return Promise.resolve(books);
        },
        bookById: (object: any, {id}: any) => {
            return books.find(book => `book-${book.id}` === id);
        },
        bookSearch: (object: any, {keyword}: any) => {
            return books.filter(book => book.title.includes(keyword));
        },
        secret: (object: any, args: any, context: any, {rootValue}: any) => {
            const user = rootValue.user;
            if (!user) {
                return 'only authorized users can know the secret';
            }
            if (user.name === 'admin' && user.pass === '123') {
                return 'howdy admin';
            }
            return 'who are you?';
        },
    },
    MutationRoot: {
        addBook: (object: any, {book}: any) => {
            books.push(book);
            return book;
        }
    }
};

const executableSchema: any = makeExecutableSchema({
    typeDefs: schema,
    resolvers,
});

export default executableSchema;
