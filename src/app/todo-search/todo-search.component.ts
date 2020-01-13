import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-search',
  templateUrl: './todo-search.component.html',
  styleUrls: ['./todo-search.component.css']
})
export class TodoSearchComponent implements OnInit {
  todos$: Observable<Todo[]>;
  private searchTerms = new Subject<string>()

  constructor( private todoService: TodoService) { }
  search(term: string){
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.todos$ =this.searchTerms.pipe(

     
      switchMap((term: string) => this.todoService.searchTodos(term)),
    );
  }

}
