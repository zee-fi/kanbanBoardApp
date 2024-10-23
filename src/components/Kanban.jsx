import kanban from "../kanban.json";
import Card from "./Card";
export default function Kanban() {
  return (
    <div className="kanban">
      <div className="listColumn">
        <h1>To Do</h1>
        <Card card={kanban.filter((card) => card.status === "To Do")} />
      </div>
      <div className="listColumn">
        <h1>In Progress</h1>
        <Card card={kanban.filter((card) => card.status === "In Progress")} />
      </div>
      <div className="listColumn">
        <h1>Done</h1>
        <Card card={kanban.filter((card) => card.status === "Done")} />
      </div>
    </div>
  );
}
