import { Form } from "react-router-dom";

export default function CreateTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [status, setStatus] = useState("To Do");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState();

  const handleSumbit = (e) => {
    e.preventDefault();

    const taskDetails = {
      title: title,
      description: description,
      assignee: assignee,
      status: status,
      priority: priority,
      dueDate: dueDate,
    };

    setTitle("");
    setDescription("");
    setAssignee("");
    setStatus("");
    setPriority("");
    setDueDate("");
  };

  return (
    <form onSubmit={handleSumbit}>
      <label>
        Title:{" "}
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
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
          onChange={(e) => {
            setAssignee(e.target.value);
          }}
        />
      </label>
      <label>
        Status:{" "}
        <select
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
          }}
          name="status"
        >
          <option value="To Do"></option>
          <option value="In Progress"></option>
          <option value="Done"></option>
        </select>
        Priority:{" "}
        <select
          value={priority}
          onChange={(e) => {
            setPriority(e.target.value);
          }}
          name="status"
        >
          <option value="Medium"></option>
          <option value="Low"></option>
          <option value="High"></option>
        </select>
        <label>
          Due Date:{" "}
          <input
            type="date"
            name="dueDate"
            value={dueDate}
            onChange={(e) => {
              setDueDate(e.target.value);
            }}
          />
        </label>
      </label>
      <button>Creat Task</button>
    </form>
  );
}

/*"id": "1",
      "title": "Design Landing Page",
      "description": "Create a visually appealing landing page for the website.",
      "assignee": "Mary Davis",
      "status": "To Do",
      "priority": "High",
      "createdDate": "2023-09-15",
      "dueDate": "2023-09-30"*/
