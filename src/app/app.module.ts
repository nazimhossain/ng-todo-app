import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import{FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MainTodoComponent } from './main-todo/main-todo.component';
import { TodoSearchComponent } from './todo-search/todo-search.component';
import { TodoListDetailsComponent } from './todo-list-details/todo-list-details';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MainTodoComponent,
    TodoSearchComponent,
    TodoListDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
