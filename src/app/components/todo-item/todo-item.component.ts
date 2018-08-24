import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {TodoItemModel} from '../../shared';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: [
    './todo-item.component.css'
  ]
})

export class TodoItemComponent implements OnInit {
  @Input() todoItem: TodoItemModel;
  @Output() edit = new EventEmitter<TodoItemModel>();
  @Output() remove = new EventEmitter<TodoItemModel>();

  constructor() {
  }

  ngOnInit() {
  }

  handleOnEditButtonClick() {
    this.edit.emit(this.todoItem);
  }

  handleOnRemoveButtonClick() {
    this.remove.emit(this.todoItem);
  }
}
