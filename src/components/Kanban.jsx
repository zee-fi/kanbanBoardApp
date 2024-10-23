import { useState } from "react";
import kanban from "\../kanban.json";
export default function Kanban() {

    const [cardToDisplay, setCardToDisplay] = useState(kanban)

    const deleteCard = (cardId) => {
        const newArray = cardToDisplay.filter((card) => {
            return cardId !== card.id;
        })
        setCardToDisplay(newArray);
    }

    let inProgress = cardToDisplay.filter((card) => {
        return card.status === "In Progress"
    });

    let toDo = cardToDisplay.filter((card) => {
        return card.status === "To Do"
    });

    let done = cardToDisplay.filter((card) => {
        return card.status === "Done"
    });



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
            <div>{display(inProgress)}</div>
            <div>{display(done)}</div>

        </div>
    )

}