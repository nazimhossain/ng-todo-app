import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import{Todo} from '../todo';
import{TodoService} from '../todo.service';


@Component({
  selector: 'app-todo-list-details',
  templateUrl: './todo-list-details.component.html',
  styleUrls: ['./todo-list-details.component.css']
})
export class TodoListDetailsComponent implements OnInit {
  @Input() todo: Todo;
  constructor(
    private route: ActivatedRoute,
    
    private todoService : TodoService,
    private location:Location
  ) { }

  ngOnInit() {
    this.getTodo();
  }
 getTodo(){
   const id = +this.route.snapshot.paramMap.get('id');
   this.todoService.getTodo(id)
   .subscribe(todo => this.todo = todo);
  
 }
 goBack(){
   this.location.back();
 }
 save(){
   this.todoService.updateTodo(this.todo)
   .subscribe(()=> this.goBack());
 }
}
