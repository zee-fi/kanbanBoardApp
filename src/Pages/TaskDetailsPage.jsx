import { useNavigate, useParams } from "react-router-dom";
import UpdateTask from "../components/UpdateTask";

export default function TaskDetailsPage(props) {
  const { taskId } = useParams();

  const navigate = useNavigate();

  const task = props.taskToDisplay.find((element) => {
    return parseInt(element.id) === parseInt(taskId); // convert taskId from string to int
  });

  const UpdateTask = () => {
    navigate(`/UpdateTask/${taskId}`);
  };

  return (
    <div className="taskDetails">
      <p>{task.description}</p>
      <p>{task.assignee}</p>
      <p>Created on: {task.createdDate}</p>
      <p>Due Date: {task.dueDate}</p>
      <p>Status: {task.status}</p>
      <button onClick={UpdateTask}>Update Task</button>
    </div>
  );
}
