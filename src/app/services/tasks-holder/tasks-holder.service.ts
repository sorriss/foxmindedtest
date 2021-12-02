import {Injectable} from '@angular/core';
import {TaskClass, TaskInterface} from '../../interfaces/task.interface';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TasksHolderService {
  public tasks$: BehaviorSubject<TaskInterface[]>;
  private tasks: TaskInterface[];
  private prefix: string;

  constructor() {
    this.prefix = 'table-list';
    this.initTasks();
  }

  public addTask(name: string): void {
    if(!name) return;
    if(!this.tasks) this.tasks = [];

    const newTask = new TaskClass(name);
    this.tasks.push(newTask);
    this.pushTasksSubject();
  }

  public deleteTask(id: number): void {
    this.tasks = this.tasks.filter(item => item.id !== id);
    this.pushTasksSubject();
  }

  private initTasks(): void {
    this.tasks$ = new BehaviorSubject<TaskInterface[]>(this.tasks);
  }

  private pushTasksSubject(): void {
    this.tasks$.next(this.tasks);
  }
}
