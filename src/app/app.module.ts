import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'; // Import RouterModule

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TaskManagementComponent } from './task-management/task-management.component';

const appRoutes: Routes = [
  { path: 'todo-list', component: TodoListComponent },
  { path: 'task-management', component: TaskManagementComponent },
  { path: '', redirectTo: '/todo-list', pathMatch: 'full' },
];

@NgModule({
  declarations: [AppComponent, TodoListComponent, TaskManagementComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
