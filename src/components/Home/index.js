import { Component } from "react";
import TaskItems from "../TaskItems";

import "./index.css";


class Home extends Component {
  state = {
    userText: "",
    taskList: [
      { id: 0, task: "Html" },
      { id: 1, task: "CSS" },
    ],
  };

  clickOnAddTask = () => {
    const { userText } = this.state;
    const newTask = { id: userText.length + 1, task: userText };
    if (userText !== "") {
      this.setState((prev) => ({ taskList: [...prev.taskList, newTask] }));
    } else {
      alert("Enter Task");
    }
  };

  getUserInput = (event) => {
    this.setState({ userText: event.target.value });
  };

  deletingTask = (id) => {
    const { taskList } = this.state;
    let filteredList = taskList.filter((each) => each.id !== id);
    this.setState({ taskList: filteredList });
  };

  render() {
    const { taskList, userText } = this.state;

    return (
      <div className="home-main-container">
        <h1 className="home-main-heading">Task Tracker</h1>
        <div className="input-and-add-button-container">
          <input
            value={userText}
            onChange={this.getUserInput}
            placeholder="Add a new task"
            className="input-field"
            type="text"
          />
          <button
            onClick={this.clickOnAddTask}
            className="add-task-button"
            type="button"
          >
            Add Task
          </button>
        </div>
        <ul className="task-ul-container">
          {taskList.map((eachTask) => (
            <TaskItems
              key={eachTask.id}
              eachTask={eachTask}
              deletingTask={this.deletingTask}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Home;
