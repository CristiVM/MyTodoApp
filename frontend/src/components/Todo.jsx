function Todo({ todo, onDelete }) {
    return (
        <div>
            <p>{todo.title} - {todo.completed ? "Completed" : "Pending"}</p>
            <button onClick={() => onDelete(todo.id)}>
                Delete
            </button>
        </div>
    )
}

export default Todo;