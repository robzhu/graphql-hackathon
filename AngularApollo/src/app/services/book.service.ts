import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { Book } from '../graphql';

export const bookFragment = gql`
  fragment BookInfo on Book {
    id
    title
    description
    author {
      name
    }
  }
`;

@Injectable()
export class BookService {

  constructor(private apollo: Apollo) {}

  /**
   * Get observable of ALL the books in the store
   */
  getBooks(): Observable<Book[]> {
    return this.apollo.watchQuery<GetBooksQueryResult>({
      query: gql`
        {
          books {
            ...BookInfo
          }
        }
        ${bookFragment}
      `
    })
      .map(result => result.data.books);
  }

  /**
   * Just get one specific book
   * @param id
   */
  getBookById(id: string): Observable<Book> {
    return this.apollo.query<GetBookQueryResult>({
      query: gql`
        query getBookById($id: String!) {
          getBookById(id: $id) {
            ...BookInfo
          }
        }
        ${bookFragment}
      `,
      variables: {
        id
      }
    })
      .switchMap(result => Observable.of(result.data.book));
  }

  /**
   * Get books that match the given keyword
   * @param keyword search term for a book
   */
  bookSearch(keyword): Observable<Book[]> {
    return this.apollo.query<GetBooksQueryResult>({
      query: gql`
        query bookSearch($keyword: String!) {
          bookSearch(keyword: $keyword) {
            ...BookInfo
          }
        }
        ${bookFragment}
      `,
      variables: {
        keyword
      }
    })
      .switchMap(result => Observable.of(result.data.books));
  }

  /**
   * Add a new book
   * @param book The book info to be added
   */
  addBook(book: Book): Observable<Book> {

    if (!book || !book.title) {
      throw new Error('Book must at least have a title');
    }

    console.log('book with title ' + book.title + ' is: ');
    console.log(book);

    return this.apollo.mutate<GetBookQueryResult>({
      mutation: gql`
        mutation addBook($book: BookInput!) {
          addBook(book: $book) {
            ...BookInfo
          }
        }
        ${bookFragment}
      `,
      variables: {
        book
      }
    })
      .switchMap(result => Observable.of(result.data.book));
  }
}

export interface GetBooksQueryResult {
  books: Book[];
}

export interface GetBookQueryResult {
  book: Book;
}
