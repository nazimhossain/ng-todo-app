import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{catchError, map, tap } from 'rxjs/operators';

import{Todo} from './todo';


// import{TODOSLIST} from './mimics-todo';



@Injectable({
  providedIn: 'root'
})
export class TodoService {
private todosUrl = 'api/todos/change';

httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
  constructor(private http:HttpClient) { }
// get heros from the server

  getTodos(): Observable <Todo[]>{
    return this.http.get<Todo[]>(this.todosUrl)
    .pipe(
      tap(_=> console.log('fetch the todo')),
      catchError(this.handleError<Todo[]>('getTodos', []))
    );
  }
// get hero by id.when 404 is not WAb SERVICE_NOT_FOUND, return unddifined
getTodoNo404<Data>(id : number): Observable <Todo>{
  const url = `${this.todosUrl}/?id =${id}`;
  return this.http.get<Todo[]>(url)
  .pipe(
    map(todos => todos[0]),
    tap( t => {
      const outcome = t ? `fetched` : `did not find`;
      console.log(`{outcome} todo id = ${id}`);
    }
  ),
  catchError(this.handleError<Todo>(`getTodo id=${id}`))
  );
}

// get Todo by id when 404 is not found
getTodo(id : number): Observable<Todo>{
  const url = `${this.todosUrl}/${id}`;
  return this.http.get<Todo>(url)
  .pipe(
    tap(_=> console.log(`fetched Todo id = ${id}`)),
    catchError(this.handleError<Todo>(`getTodo id=${id}`))
  );
  
}

// get Todos whoes name contains search terms
searchTodos(term: string):Observable<Todo[]>{
  if(!term.trim()){
    return of([]);
  }
  return this.http.get<Todo[]>(`${this.todosUrl}/?name=${term}`)
  .pipe(
    tap(_=> console.log(`found heroes matching "${term}"`)),
    catchError(this.handleError<Todo[]>('searchTodos', []))
  );
}

// to send the new Todo to the server and save
addTodo(todo:Todo): Observable<Todo>{
  return this.http.post<Todo>(this.todosUrl, todo, this.httpOptions)
  .pipe(
    tap((newTodo: Todo) => {console.log(newTodo); console.log(`added tood w/ id=${newTodo.id}`)}),
    catchError(this.handleError<Todo>('addTodo'))
  );
}

// delete the todo from the server

deleteTodo(todo: Todo | number): Observable<Todo>{
  const id = typeof todo === 'number'? todo:todo.id;
  const url = `${this.todosUrl}/${id}`;
  return this.http.delete<Todo>(url, this.httpOptions)
  .pipe(
    tap(_=>console.log(`deleted hero id=${id}`)),
    catchError(this.handleError<Todo>('deleteTodo'))
  );
}


// update the tood on the server

updateTodo(todo: Todo): Observable<any>{
  return this.http.put(this.todosUrl, todo, this.httpOptions)
  .pipe(
    tap(_=> console.log(`updated hero id=${todo.id}`)),
    catchError(this.handleError<any>('updateTodo'))
  );
}
 
private handleError<T>(operation = 'operation', result?:T ){
  return(error:any): Observable<T> =>{
    console.error(error);

    console.log(`${operation} failed: ${error.message}`);
    return of(result as T);
  };
}


}


