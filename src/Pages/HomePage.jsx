import CreateTask from "../components/CreateTask";
import Task from "../components/Task";
import { Link } from "react-router-dom";

export default function Kanban(props) {
  return (
    <div className="kanban">
      <div className="listColumn toDo">
        <h1>To Do</h1>

        {props.taskToDisplay
          .filter((task) => task.status === "To Do")
          .map((kanbanObj) => {
            return (
              <Task
                key={kanbanObj.id}
                task={kanbanObj}
                deleteFunction={props.callBackToDelete}
              />
            );
          })}
      </div>
      <div className="listColumn inProgress">
        <h1>In Progress</h1>

        {props.taskToDisplay
          .filter((task) => task.status === "In Progress")
          .map((kanbanObj) => {
            return (
              <Task
                key={kanbanObj.id}
                task={kanbanObj}
                deleteFunction={props.callBackToDelete}
              />
            );
          })}
      </div>
      <div className="listColumn done">
        <h1>Done</h1>
        {props.taskToDisplay
          .filter((task) => task.status === "Done")
          .map((kanbanObj) => {
            return (
              <Task
                key={kanbanObj.id}
                task={kanbanObj}
                deleteFunction={props.callBackToDelete}
              />
            );
          })}
      </div>
    </div>
  );
}
