import {Component, OnInit, Input, Output, EventEmitter, HostListener} from '@angular/core';
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
  @Output() selection = new EventEmitter<{
    todo: TodoItemModel,
    selected: boolean
  }>();

  constructor() {
  }

  ngOnInit() {
  }

  @HostListener('click', ['$event.currentTarget']) onClick(tile: Element) {
    const selected = tile.classList.contains('selected');
    if (selected) {
      // remove selected from tile
      tile.classList.remove('selected');
      // emit
      this.selection.emit({
        todo: this.todoItem,
        selected: false
      });
    } else {
      // add selected to tile
      tile.classList.add('selected');
      // emit
      this.selection.emit({
        todo: this.todoItem,
        selected: true
      });
    }
  }

  handleOnEditButtonClick(evt: Event) {
    // stop event from bubbling up
    evt.stopPropagation();
    // emit
    this.edit.emit(this.todoItem);
  }

  handleOnRemoveButtonClick(evt: Event) {
    // stop event from bubbling up
    evt.stopPropagation();
    // emit
    this.remove.emit(this.todoItem);
  }
}
