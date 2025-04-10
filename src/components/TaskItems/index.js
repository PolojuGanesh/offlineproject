import "./index.css";

const TaskItems = (props) => {
  const { eachTask, deletingTask, changeStatusOfTask } = props;
  const { task, id, status } = eachTask;

  const clickOnDelete = () => {
    deletingTask(id);
  };

  const clickOnCheckbox = (id) => {
    changeStatusOfTask(id)
  };

  return (
    <li className="each-task-list-container">
      <div className="checkbox-and-label-container">
        <input
          onClick={() => clickOnCheckbox(id)}
          id={id}
          type="checkbox"
          className="checkbox"
          checked = {status}
        />
        <label htmlFor={id} className={status ? "checked" : "task-label"}>
          {task}
        </label>
      </div>
      <button onClick={clickOnDelete} className="delete-button">
        Delete
      </button>
    </li>
  );
};

export default TaskItems;
