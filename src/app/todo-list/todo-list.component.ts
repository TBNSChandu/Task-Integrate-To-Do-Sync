import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [TaskService],
})
export class TodoListComponent {
  newTask: string = '';
  tasks: string[] = [];
  taskService: TaskService;
  showComponent: boolean = false; // Add this property

  constructor(taskService: TaskService) {
    this.taskService = taskService; // Initialize taskService in the constructor
  }

  toggleComponent() {
    this.showComponent = !this.showComponent;
  }

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push(this.newTask);
      this.taskService.addTask(this.newTask);
      this.newTask = '';
    }
  }

  removeTask(index: number) {
    const removedTask = this.tasks.splice(index, 1)[0];
    this.taskService.removeTask(removedTask);
  }
}
