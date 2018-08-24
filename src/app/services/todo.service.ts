import {Injectable} from '@angular/core';
import {TodoItemModel} from '../shared';
import {Observable} from 'rxjs';

const MOCK_TIMEOUT_IN_MS = 3000;

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  private todoItems = [];

  constructor() {
  }

  init(todoItems) {
    // defaults
    todoItems.push(new TodoItemModel('My first todo', 'Some optional description'));
    todoItems.push(new TodoItemModel('My Second todo', 'Some optional description'));
    // populate global
    this.todoItems = todoItems;
  }

  add(todo: TodoItemModel) {
    return new Observable(observer => {
      // perform actions after delay
      setTimeout(() => {
        // add it to store
        this.todoItems.push(todo);
        // conclude
        return observer.next();
      }, MOCK_TIMEOUT_IN_MS);
    });
  }

  update(id: string, todo: TodoItemModel) {
    return new Observable(observer => {
      // perform actions after delay
      setTimeout(() => {
        // find and update
        const item = this.todoItems.find(todoItem => todoItem.id === id);
        Object.assign(item, todo);
        // conclude
        return observer.next();
      }, MOCK_TIMEOUT_IN_MS);
    });
  }

  delete(id: string) {
    const item = this.todoItems.find(todoItem => todoItem.id === id);
    this.todoItems.splice(this.todoItems.indexOf(item), 1);
  }
}
