import { Component, OnInit } from '@angular/core';
import{Todo} from '../todo';
import{TodoService} from '../todo.service';
import { TodoSearchComponent } from '../todo-search/todo-search.component';
import { TodoListDetailsComponent } from '../todo-list-details/todo-list-details';
import { observable, Subscriber } from 'rxjs';


@Component({
  selector: 'app-main-todo',
  templateUrl: './main-todo.component.html',
  styleUrls: ['./main-todo.component.css']
})
export class MainTodoComponent implements OnInit {
  todos: Todo[];
  

  constructor(private todoService : TodoService) { }

  ngOnInit() {
    this.getTodos();
    
  }
 
 
  


getTodos(){
  this.todoService.getTodos()
  .subscribe(todos => this.todos = todos);
}

  add(name:string){
    name= name.trim();
    if(!name){ return;}
    this.todoService.addTodo({ name } as Todo )
    .subscribe(todo => {
      console.log(todo);
      this.todos.push(todo);

    });
  }
  delete(todo: Todo){
    this.todos = this .todos.filter(t=> t !==todo);
    this.todoService.deleteTodo(todo).subscribe();
  }
}
