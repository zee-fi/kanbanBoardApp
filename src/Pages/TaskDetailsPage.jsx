import { useParams } from "react-router-dom";

export default function TaskDetailsPage(props) {
  const { taskId } = useParams();

  const task = props.taskToDisplay.find((element) => {
    return element.id === taskId;
  });

  return (
    <>
      <p>{task.description}</p>
      <p>{task.assignee}</p>
      <p>Created on: {task.createdDate}</p>
      <p>Due Date: {task.dueDate}</p>
    </>
  );
}
