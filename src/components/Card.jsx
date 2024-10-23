import { useState } from "react";

export default function Card(props) {
  const [cardToDisplay, setCardToDisplay] = useState(props.card);

  const deleteCard = (cardId) => {
    const newArray = cardToDisplay.filter((card) => {
      return cardId !== card.id;
    });
    setCardToDisplay(newArray);
  };

  return cardToDisplay.map((kanbanObj) => (
    <div key={kanbanObj.id} className="card">
      <h3>{kanbanObj.title}</h3>
      <p>{kanbanObj.description}</p>
      <p>{kanbanObj.assignee}</p>
      <p>Priority: {kanbanObj.priority}</p>
      <p>Created on: {kanbanObj.createdDate}</p>
      <p>Due Date: {kanbanObj.dueDate}</p>
      <button
        onClick={() => {
          deleteCard(kanbanObj.id);
        }}
      >
        Delete
      </button>
    </div>
  ));
}
