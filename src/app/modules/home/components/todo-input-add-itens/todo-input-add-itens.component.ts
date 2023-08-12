import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent {
  @Output() emitNewTask = new EventEmitter()
  task: string = ""

  submitForm() {
    if (this.task.trim()) {
      this.emitNewTask.emit(this.task)
      this.task = ""
    }
  }
}
