function Todo({ todo }) {
    return (
        <div>
            <p>{todo.title}</p>
            <p>{todo.completed ? "Completed" : "Pending"}</p>
        </div>
    )
}

export default Todo;