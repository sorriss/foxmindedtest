import { Component, OnInit } from '@angular/core';
import {TasksHolderService} from '../../services/tasks-holder/tasks-holder.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  public taskName: string;

  constructor(private tasksHolderService: TasksHolderService) { }

  ngOnInit(): void {
  }

  public addTask(): void {
    if (!this.taskName) return;

    this.tasksHolderService.addTask(this.taskName);
    this.taskName = '';
  }

}
