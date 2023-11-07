import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'combined-todo-task-app';
  showComponent: boolean = false;

  toggleComponent() {
    this.showComponent = !this.showComponent;
  }
}
