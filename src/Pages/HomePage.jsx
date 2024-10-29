import Task from "../components/Task";
import { useState } from "react";
export default function Kanban(props) {
  const [draggedTask, setDraggedTask] = useState(null);

  const handleDragStart = (task) => {
    setDraggedTask(task);
  };

  const handleDrop = (status) => {
    // Update the task's status and notify parent if needed
    if (draggedTask) {
      const updatedTask = { ...draggedTask };
      props.updateTaskStatus(updatedTask); // Call a function from parent to update task
      setDraggedTask(null); // Reset dragged task
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Necessary to allow dropping
  };
  const toDo = [];
  const inProgress = [];
  const done = [];

  props.taskToDisplay.map((task) => {
    if (task.status === "To Do") {
      toDo.push(task);
    } else if (task.status === "In Progress") {
      inProgress.push(task);
    } else if (task.status === "Done") {
      done.push(task);
    }
  });

  return (
    <div className="kanban">
      <div
        className="listColumn toDo"
        onDragOver={handleDragOver}
        onDrop={() => handleDrop("To Do")}
      >
        <h1>To Do</h1>

        {toDo.map((task) => {
          return (
            <Task
              key={task.id}
              task={task}
              deleteFunction={props.callBackToDelete}
              onDragStart={() => handleDragStart(task)}
            />
          );
        })}
      </div>
      <div
        className="listColumn inProgress"
        onDragOver={handleDragOver}
        onDrop={() => handleDrop("In Progress")}
      >
        <h1>In Progress</h1>

        {inProgress.map((task) => {
          return (
            <Task
              key={task.id}
              task={task}
              deleteFunction={props.callBackToDelete}
              onDragStart={() => handleDragStart(task)}
            />
          );
        })}
      </div>
      <div
        className="listColumn done"
        onDragOver={handleDragOver}
        onDrop={() => handleDrop("Done")}
      >
        <h1>Done</h1>
        {done.map((task) => {
          return (
            <Task
              key={task.id}
              task={task}
              deleteFunction={props.callBackToDelete}
              onDragStart={() => handleDragStart(task)}
            />
          );
        })}
      </div>
    </div>
  );
}
