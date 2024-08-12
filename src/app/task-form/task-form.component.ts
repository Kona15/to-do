// src/app/task-form/task-form.component.ts
import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
})
export class TaskFormComponent {
  title = '';
  description = '';

  @Output() addTask = new EventEmitter<Task>();

  onSubmit() {
    const newTask: Task = {
      title: this.title,
      description: this.description,
      completed: false,
    };
    this.addTask.emit(newTask);
    this.title = '';
    this.description = '';
  }
}
