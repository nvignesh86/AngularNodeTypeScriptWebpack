import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import {TasksComponent} from './components/tasks/tasks.component';

import { TaskService } from './components/tasks/services/tasks.service';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule],
  declarations: [ AppComponent ,TasksComponent],
  bootstrap:    [ AppComponent ],
  providers:[TaskService]
})
export class AppModule { }
