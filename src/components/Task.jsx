import { Link, useNavigate } from "react-router-dom";

export default function Task(props) {
  const navigate = useNavigate(); // Hook for navigation to Home Page
  const navigateFun = () => {
    navigate(`/details/${props.task.id}`);
  };
  return (
    <div className="task">
      <h3>{props.task.title}</h3>
      <p>Priority: {props.task.priority}</p>
      {/*switched Link to navigate which is in a
       function called onClick to fix bug in css*/}
      <button onClick={navigateFun}>More Details</button>{" "}
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
