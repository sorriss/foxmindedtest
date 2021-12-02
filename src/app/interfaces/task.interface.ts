export interface TaskInterface {
  createdAt: Date;
  id: number;
  name: string;
  status: boolean;
}

export class TaskClass implements TaskInterface {
  public createdAt = new Date();
  public id = new Date().getTime();
  public status: boolean = false;
  constructor(public name: string) {}
}
