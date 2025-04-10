import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import TaskItems from "../TaskItems";

import "./index.css";


class Home extends Component {
  state = {
    userText: "",
    taskList: [],
  };

  componentDidMount() {
    const taskListData = JSON.parse(localStorage.getItem("taskList"))
    this.setState({taskList: taskListData})
  }

  componentDidUpdate() {
    const {taskList} = this.state
    localStorage.setItem("taskList", JSON.stringify(taskList))
  }

  clickOnAddTask = () => {
    const { userText } = this.state;
    const newTask = { id: uuidv4(), task: userText, status: false };
    if (userText !== "") {
      this.setState((prev) => ({ taskList: [...prev.taskList, newTask], userText: "" }));
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

  changeStatusOfTask = (id) => {
    this.setState(prev => ({
      taskList: prev.taskList.map(each => each.id === id ? {...each, status: !each.status} : each)
    }))
  }

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
        { taskList.length <= 0 ? <p className="add-your-task-heading">Add Your Task</p> :
        <ul className="task-ul-container">
          {taskList.map((eachTask) => (
            <TaskItems
              key={eachTask.id}
              eachTask={eachTask}
              deletingTask={this.deletingTask}
              changeStatusOfTask={this.changeStatusOfTask}
            />
          ))}
        </ul>}
      </div>
    );
  }
}

export default Home;
