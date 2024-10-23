import kanban from "../kanban.json";
import Card from "./Card";
export default function Kanban() {
  return (
    <div className="kanban">
      <div>
        <Card card={kanban.filter((card) => card.status === "To Do")} />
      </div>
      <div>
        <Card card={kanban.filter((card) => card.status === "In Progress")} />
      </div>
      <div>
        <Card card={kanban.filter((card) => card.status === "Done")} />
      </div>
    </div>
  );
}
