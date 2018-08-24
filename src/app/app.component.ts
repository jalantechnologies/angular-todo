import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgbModal, NgbModalOptions, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

import {ViewStateModel, TodoItemModel} from './shared';
import {TodoService} from './services';
import {FormControl, FormGroup, Validators} from '@angular/forms';

const NG_MODAL_OPTS: NgbModalOptions = {
  // modal options here
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  @ViewChild('modalCreateNewTodo') modalCreateNewTodo: ElementRef;
  todoItems = [];
  todoFormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    desc: new FormControl(''),
    id: new FormControl('') // only for update purposes
  });
  todoUpdate = false;
  todoOperationViewState = new ViewStateModel();
  private modalRef: NgbModalRef;

  constructor(private todoService: TodoService,
              private modalService: NgbModal) {
    this.todoService.init(this.todoItems);
  }

  ngOnInit() {
  }

  handleOnCreateNewButtonClick() {
    this.openDialog(true);
  }

  handleOnTodoEditButtonClick(todo: TodoItemModel) {
    this.todoUpdate = true;
    this.todoFormGroup.patchValue({
      title: todo.title,
      desc: todo.desc,
      id: todo.id
    });
    this.openDialog();
  }

  private openDialog(reset?: boolean) {
    if (reset) {
      // reset form
      this.todoFormGroup.reset();
      this.todoUpdate = false;
    }
    // reset view state
    this.todoOperationViewState.reset();
    // open dialog
    this.modalRef = this.modalService.open(this.modalCreateNewTodo, NG_MODAL_OPTS);
  }

  handleOnTodoRemoveButtonClick(todo: TodoItemModel) {
    this.todoService.delete(todo.id);
  }

  handleOnTodoFormSubmit() {
    // init operation load
    this.todoOperationViewState.load();
    // init item
    const {title, desc, id} = this.todoFormGroup.value;
    const todo = new TodoItemModel(title, desc);
    // choose mode of operation
    if (this.todoUpdate) {
      // update
      this.todoService.update(id, todo).subscribe(
        () => {
          // updated successfully
          this.todoOperationViewState.finishedWithSuccess();
          // close dialog
          this.handleDialogCloseButtonClick();
        }
      );
    } else {
      // create
      // invoke service and pass values
      this.todoService.add(todo).subscribe(
        () => {
          // added successfully
          this.todoOperationViewState.finishedWithSuccess();
          // close dialog
          this.handleDialogCloseButtonClick();
        }
      );
    }
  }

  handleDialogCloseButtonClick() {
    if (this.modalRef) {
      this.modalRef.close();
    }
  }
}
