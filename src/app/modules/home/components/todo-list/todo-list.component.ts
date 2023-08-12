import {Component, DoCheck} from '@angular/core';
import {TaskList} from "../../model/task-list";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {
  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem('list') || '[]');

  ngDoCheck(): void {
    if (this.taskList) {
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked))
      localStorage.setItem('list', JSON.stringify(this.taskList))
    }
  }

  addTask(task: string) {
    this.taskList.push({ task, checked: false})
  }

  deleteItemTaskList(index: number): void {
    this.taskList.splice(index, 1);
  }

  deleteAll(): void {
    const confirm = window.confirm("Do you want to delete everything?")
    if (confirm) this.taskList = [];
  }

  validationInput(event: string, index: number): void {
    if (!event.length) {
      const confirm = window.confirm("Task is empty, do you want to delete it?")
      if (confirm) {
        this.deleteItemTaskList(index)
      }
    }
  }
}
