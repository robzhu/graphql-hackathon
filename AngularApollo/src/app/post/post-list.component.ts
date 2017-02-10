import { Component, OnInit } from '@angular/core';
import { Apollo, ApolloQueryObservable } from 'apollo-angular';

import gql from 'graphql-tag';

@Component({
  selector: 'app-post-list',
  template: `
    <ul>
      <li *ngFor="let post of books | async | select: 'books'">
        {{post.title}} by {{post.author.name}}
      </li>
    </ul>
  `
})
export class PostListComponent implements OnInit {
  books: ApolloQueryObservable<any>;
  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.books = this.apollo.watchQuery({
      query: gql`
        query allBooks {
          books {
            id
            title
            author {
              id
              name
            }
          }
        }
      `,
    });
  }
}
