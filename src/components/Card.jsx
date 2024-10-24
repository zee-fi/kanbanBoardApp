export default function Card(props) {
  return (
    <div className="card">
      <h3>{props.card.title}</h3>
      <p>{props.card.description}</p>
      <p>{props.card.assignee}</p>
      <p>Priority: {props.card.priority}</p>
      <p>Created on: {props.card.createdDate}</p>
      <p>Due Date: {props.card.dueDate}</p>
      <button
        onClick={() => {
          props.deleteFunction(props.card.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
