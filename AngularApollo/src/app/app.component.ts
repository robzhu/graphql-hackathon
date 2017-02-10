import { Component, OnInit } from '@angular/core';
import { Book } from './graphql';
import { AuthorService, BookService } from './services';

@Component({
  selector: 'app-root',
  template: `
    <h2>Authors</h2>
    <ul>
      <li *ngFor="let author of authors | async">
        {{author.id}} - {{author.name}}
      </li>
    </ul>
    
    <h2>Books</h2>
    <ul>
      <li *ngFor="let book of books | async">
        {{book.title}} by {{book.author?.name}}
      </li>
    </ul>
    
    <h2>Add Book</h2>
    <input type="text" [(ngModel)]="newBook.title" />
    <input type="text" [(ngModel)]="newBook.description"  />
    <select>
        <option *ngFor="let author of authors | async">{{author.name}}</option>
    </select>
    <button (click)="addBook(newBook)">Add Book</button>
  `,
})
export class AppComponent implements OnInit {
  authors: any;
  books: any;
  newBook: any = {};

  constructor(
    public authorService: AuthorService,
    public bookService: BookService
  ) {}

  ngOnInit() {
    this.authors = this.authorService.getAuthors();
    this.books = this.bookService.getBooks();
  }

  addBook(book: Book) {
    this.bookService.addBook(book)
      .subscribe(() => {
        this.newBook = {};
      });
  }
}

