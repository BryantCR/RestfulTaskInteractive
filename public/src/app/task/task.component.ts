import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  title: string = "";
  allTasks: any[] = [];
  taskByTitle: any[] = [];
  result: any;
  task2: any = [];

  constructor(private _httpService: HttpService){
    
  }

  ngOnInit(): void {
  
  }

  getTasks(): void {
    console.log("We are going to fetch the tasks list!");
    this.allTasks = this._httpService.task;
    console.log("Tasks List component ", this.allTasks);
  }

  taskInfo(event:any):void{
    event.preventDefault();
    this.title = event.target.title.value;
    console.log("FIND: ", this.title);
    this._httpService.fetchTasksByName(this.title)
    //this.result = this._httpService.task2;
    .subscribe( (data:any) => {
      this.task2 = data.task;
      console.log("Find by Name", this.task2 );
      console.log('QUE TIPO DE DATO?', typeof this.task2 )
    });
    //console.log("found result: ", this.result);
  }

}
