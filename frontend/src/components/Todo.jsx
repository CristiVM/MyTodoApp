function Todo({ todo }) {
    return (
        <div>
            <p>{todo.title} - {todo.completed ? "Completed" : "Pending"}</p>
        </div>
    )
}

export default Todo;