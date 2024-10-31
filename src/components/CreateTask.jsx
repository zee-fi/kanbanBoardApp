import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/form.css";

export default function CreateTask(props) {
  // State variables to store user input for the new task's details
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [status, setStatus] = useState("To Do");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");
  const navigate = useNavigate(); // Hook for navigation to Home Page

  // Form submit handler to create a new task
  const handleSumbit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Creating a new task object with the values from state variables
    const taskDetails = {
      title: title,
      description: description,
      assignee: assignee,
      status: status,
      priority: priority,
      dueDate: dueDate,
    };
    // Passes the new task to the parent component using the callback function
    props.callBackToCreate(taskDetails);

    // Reset the form fields to their initial state after submission
    setTitle("");
    setDescription("");
    setAssignee("");
    setStatus("");
    setPriority("");
    setDueDate("");

    // Redirects to the home page

    navigate("/");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSumbit} className="CreateTask form-grid">
        <label>
          Title:{" "}
          <input
            type="text"
            name="title"
            placeholder="Title"
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
        <button
          onClick={() => {
            toast("Success!");
          }}
        >
          Create Task
        </button>
      </form>
    </div>
  );
}
