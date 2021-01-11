import * as React from 'react';

export class App extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      currentTask: '',
      tasks: [],
    };
  }

  deleteTask(taskId: number): void {
    const filteredTasks: ITask[] = this.state.tasks.filter(
      (task) => task.id !== taskId
    );
    this.setState({
      tasks: filteredTasks,
    });
  }

  public handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    this.setState({
      currentTask: '',
      tasks: [
        ...this.state.tasks,

        {
          id: this._timeInMilliseconds(),
          value: this.state.currentTask,
          completed: false,
        },
      ],
    });
  }

  // its public becouse return html
  public renderTask(): JSX.Element[] {
    return this.state.tasks.map((task: ITask, index: number) => {
      return (
        <div key={task.id.toString()}>
          <span>{task.value}</span>
          <button onClick={() => this.deleteTask(task.id)}>Delete</button>
        </div>
      );
    });
  }

  public render(): JSX.Element {
    // console.log(this.state);
    return (
      <React.Fragment>
        <h1>React Typescript Todo List</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="new-todo">What needs to be done?</label>
          <br />
          <input
            id="new-todo"
            type="text"
            value={this.state.currentTask}
            placeholder="Add a task"
            onChange={(e) => this.setState({ currentTask: e.target.value })}
          />
          <button type="submit">Add Task</button>
        </form>
        <section>{this.renderTask()}</section>
      </React.Fragment>
    );
  }

  private _timeInMilliseconds(): number {
    return Date.now();
  }
}

interface IState {
  currentTask: string;
  tasks: ITask[];
}

interface ITask {
  id: number;
  value: string;
  completed: boolean;
}
