import { Component } from '@angular/core';
import { TaskService } from './services/tasks.service'
import { Task } from './tasks';

@Component({
  selector: 'tasks',
  templateUrl: 'tasks.Component.html'
})
export class TasksComponent  {
	tasks : Task[];
	name  : string;             
	age : string;
	details : any;

	constructor(private taskService:TaskService){
		//this.name="saanvi";
		//this.age="1";

		this.taskService.getTasks()
			.subscribe(tasks => {
				//console.log(tasks);
				this.tasks = tasks;
			});

		this.taskService.getDetails()
			.subscribe(tasks => {
				//console.log(tasks);
				this.details = tasks;
			});	
	} 	

	addTasks(event:any){
		event.preventDefault();
		var newContact = {
			name : this.name,
			age : this.age
		}
		console.log(this.name,this.age);
		this.taskService.addTask(newContact)
			.subscribe(tasks => {
				this.tasks.push(tasks);
				this.name="";
				this.age="";
			})
	}

	deleteTask(taskId:any){
		console.log(taskId);
		this.taskService.deleteTask(taskId)
			.subscribe(tasks=>{
				for(var i=0;i<this.tasks.length;i++){
					if(this.tasks[i]._id == taskId){
						this.tasks.splice(i,1);
						break;
					}
				}
				console.log(tasks);
			});
	}

	updateTask(taskId:any){
	var newContact = {
			_id:taskId,
			name : this.name,
			age : this.age
		}
		this.taskService.updateTask(newContact)
				.subscribe(tasks=>{
					for(var i=0;i<this.tasks.length;i++){
						if(this.tasks[i]._id == taskId){
							this.tasks[i].name = this.name;
							this.tasks[i].age = this.age;
							break;
						}
					}
				console.log(tasks);
			});
	}
 }
