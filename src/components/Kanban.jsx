import { useState } from "react";
import kanban from "\../kanban.json";
export default function Kanban() {


    let inProgress = kanban.filter((card) => {
        return card.status === "In Progress"
    });

    let toDo = kanban.filter((card) => {
        return card.status === "To Do"
    });

    let done = kanban.filter((card) => {
        return card.status === "Done"
    });
    const [cardToDisplay, setCardToDisplay] = useState(inProgress)

    const deleteCard = (cardId) => {
        const newArray = cardToDisplay.filter((card) => {
            return cardId !== card.id;
        })
        setCardToDisplay(newArray);
    }


    function display(Array) {

        return Array.map((kanbanObj) => {
            return (
                <div key={kanbanObj.id} className="card">
                    <h3>{kanbanObj.title}</h3>
                    <p>{kanbanObj.description}</p>
                    <p>{kanbanObj.assignee}</p>
                    <p>Priority: {kanbanObj.priority}</p>
                    <p>Created on: {kanbanObj.createdDate}</p>
                    <p>Due Date: {kanbanObj.dueDate}</p>
                    <button onClick={() => {
                        deleteCard(kanbanObj.id)
                    }}>Delete</button>

                </div>
            )
        })

    }

    return (


        <div className="kanban">
            <div>{display(toDo)}</div>
            <div>{display(cardToDisplay)}</div>
            <div>{display(done)}</div>

        </div>
    )

}