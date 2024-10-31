import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function UpdateTask(props) {
  const { taskId } = useParams();
  const newArr = props.taskToDisplay.filter((task) => {
    return taskId === task.id;
  });

  const task = newArr[0];
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [assignee, setAssignee] = useState(task.assignee);
  const [status, setStatus] = useState(task.status);
  const [priority, setPriority] = useState(task.priority);
  const [dueDate, setDueDate] = useState(task.dueDate);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const taskDetails = {
      id: taskId,
      title: title,
      description: description,
      assignee: assignee,
      status: status,
      priority: priority,
      dueDate: dueDate,
    };

    props.callBackToUpdate(taskDetails);

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:{" "}
        <input
          type="text"
          name="title"
          placeholder={task.title}
          value={title}
          required
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </label>
      <label>
        Description:{" "}
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={description}
          required
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </label>
      <label>
        Assignee:{" "}
        <input
          type="text"
          name="assignee"
          placeholder="Assignee Name"
          value={assignee}
          required
          onChange={(e) => {
            setAssignee(e.target.value);
          }}
        />
      </label>
      <label>
        Status:{" "}
        <select
          value={status}
          required
          onChange={(e) => {
            setStatus(e.target.value);
          }}
          name="status"
        >
          <option value="To Do">To Do</option>
          <option value="In Progress"> In Progress</option>
          <option value="Done">Done</option>
        </select>
        Priority:{" "}
        <select
          value={priority}
          required
          onChange={(e) => {
            setPriority(e.target.value);
          }}
          name="status"
        >
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
          <option value="High">High</option>
        </select>
        <label>
          Due Date:{" "}
          <input
            type="date"
            name="dueDate"
            value={dueDate}
            required
            onChange={(e) => {
              setDueDate(e.target.value);
            }}
          />
        </label>
      </label>
      <button>Update Task</button>
    </form>
  );
}
