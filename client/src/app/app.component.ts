import { Component } from '@angular/core';
import { TaskService } from './components/tasks/services/tasks.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers:[TaskService]
//  styles: [ require('bootstrap/dist/css/bootstrap')]
})
export class AppComponent  { }
