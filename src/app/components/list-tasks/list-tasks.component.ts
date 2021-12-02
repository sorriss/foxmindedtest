import {Component, OnInit, OnDestroy} from '@angular/core';
import {TasksHolderService} from '../../services/tasks-holder/tasks-holder.service';
import {BehaviorSubject} from 'rxjs';
import {TaskInterface} from '../../interfaces/task.interface';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.scss']
})

export class ListTasksComponent implements OnInit, OnDestroy {
  public tasks$: BehaviorSubject<TaskInterface[]>;

  constructor(private tasksHolderService: TasksHolderService) {
    this.tasks$ = this.tasksHolderService.tasks$;
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.tasks$.complete();
  }

  public deleteTask(id: number): void {
    if(!id) return;

    this.tasksHolderService.deleteTask(id);
  }
}
