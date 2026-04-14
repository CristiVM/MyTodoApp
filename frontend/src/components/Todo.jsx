import { useState } from "react";

function Todo({ todo, onDelete, onUpdateTitle, onUpdateCompleted }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(todo.title);

    return (
        <div>
            {isEditing ? (
                // Edit mode
                <>
                    <input
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                    />
                    <button onClick={() => {setIsEditing(false); onUpdateTitle(todo.id, newTitle);}}>Update</button>
                    <button onClick={() => {setIsEditing(false); setNewTitle(todo.title)}}>Cancel</button>
                </>
            ) : (
                // View mode
                <>
                    <p>{todo.title} - {todo.completed ? "Completed" : "Pending"}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                </>
            )}
            <button onClick={() => onUpdateCompleted(todo.id, !todo.completed)}>
                Change Completed
            </button>
            <button onClick={() => onDelete(todo.id)}>
                Delete
            </button>
        </div>
    )
}

export default Todo;