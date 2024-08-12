import { Component, Input } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
})
export class TaskListComponent {
  @Input() tasks: Task[] = []; // Input property to receive tasks

  removeTask(taskToRemove: Task) {
    this.tasks = this.tasks.filter(task => task !== taskToRemove);
  }
}
