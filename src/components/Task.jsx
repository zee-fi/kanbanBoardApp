import { Link } from "react-router-dom";

export default function Task(props) {
  return (
    <div className="task">
      <h3>{props.task.title}</h3>

      <p>Priority: {props.task.priority}</p>

      <Link to={`/details/${props.task.id}`}>
        <button>More Details</button>
      </Link>

      <button
        onClick={() => {
          props.deleteFunction(props.task.id);
        }}
      >
        Delete Task
      </button>
    </div>
  );
}
