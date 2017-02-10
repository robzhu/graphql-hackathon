import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApolloModule } from 'apollo-angular';

import { AppComponent } from './app.component';
import { PostListComponent } from './post/post-list.component';
import { provideClient } from './client';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    ApolloModule.forRoot(provideClient)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
