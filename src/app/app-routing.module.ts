import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainTodoComponent } from './main-todo/main-todo.component';
import { TodoListDetailsComponent } from './todo-list-details/todo-list-details';

const routes: Routes=[
{path:'list-details/:id', component:TodoListDetailsComponent},
{path:'main-todo' , component:MainTodoComponent },


];

@NgModule({
 
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
