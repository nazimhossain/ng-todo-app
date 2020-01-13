import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import{Todo} from './todo';



@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const todos=[
   {id: 1 , name: 'Mouse'},
   {id: 2 , name: 'laptop'},
   {id: 3 , name: 'money-bag'},
   {id: 4 , name: 'gazar'},
   {id: 5 , name: 'toothpast'},
   {id: 6 , name: 'kacha-morich'},
   {id: 7 , name: 'mathmatics-book'},
   {id: 8 , name: 'call-at-home'},
   {id: 9 , name: 'electiciti-bill'},
   {id: 10 , name: 'pay-something'},
   {id: 11 , name: 'accessories'},
   {id: 12 , name: 'potao'},
   {id: 13 , name: 'mobile-set'},
   
    ];
    return{todos};
  }
 
  

  genId(todos: Todo[]):number{
    return todos.length > 0 ? Math.max(...todos.map(todo=>todo.id))+1:11;
  }
}
