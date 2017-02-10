import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ApolloModuleInst } from './graphql';
import { AppComponent } from './app.component';
import { AuthorService, BookService } from './services';

@NgModule({
  declarations: [
    AppComponent                // the root component needs to be declared
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ApolloModuleInst
  ],
  providers: [
    AuthorService,
    BookService
  ],
  bootstrap: [AppComponent]     // we bootstrap on the root component
})
export class AppModule {}
