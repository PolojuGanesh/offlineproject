import "./index.css";

const TaskItems = (props) => {
  const { eachTask, deletingTask } = props;
  const { task, id } = eachTask;

  const clickOnDelete = () => {
    deletingTask(id);
  };

  let checked;

  const clickOnCheckbox = (clickId) => {
    checked = clickId === id;
  };

  return (
    <li className="each-task-list-container">
      <div className="checkbox-and-label-container">
        <input
          onClick={() => clickOnCheckbox(id)}
          id={id}
          type="checkbox"
          className="checkbox"
        />
        <label htmlFor={id} className={checked ? "checked" : "task-label"}>
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
