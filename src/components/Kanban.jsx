import kanban from "../kanban.json";
import { useState } from "react";
import Card from "./Card";

export default function Kanban() {
  const [cardToDisplay, setCardToDisplay] = useState(kanban);

  const deleteCard = (cardId) => {
    const newArray = cardToDisplay.filter((card) => {
      return cardId !== card.id;
    });
    setCardToDisplay(newArray);
  };
  return (
    <div className="kanban">
      <div className="listColumn">
        <h1>To Do</h1>

        {cardToDisplay
          .filter((card) => card.status === "To Do")
          .map((kanbanObj) => {
            return <Card card={kanbanObj} deleteFunction={deleteCard} />;
          })}
      </div>
      <div className="listColumn">
        <h1>In Progress</h1>
        {cardToDisplay
          .filter((card) => card.status === "In Progress")
          .map((kanbanObj) => {
            return <Card card={kanbanObj} deleteFunction={deleteCard} />;
          })}
      </div>
      <div className="listColumn">
        <h1>Done</h1>
        {cardToDisplay
          .filter((card) => card.status === "Done")
          .map((kanbanObj) => {
            return <Card card={kanbanObj} deleteFunction={deleteCard} />;
          })}
      </div>
    </div>
  );
}
