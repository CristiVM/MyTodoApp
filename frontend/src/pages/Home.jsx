import { useState, useEffect } from "react";
import api from "../api";
import Todo from "../components/Todo";

function Home() {
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState("");

    const getTodos = () => {
        api.get("/api/todos/")
            .then((response) => response.data)
            .then((data) => {
                setTodos(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };

    const createTodo = (e) => {
        e.preventDefault();
        api.post("/api/todos/", { title, completed: false })
            .then((response) => {
                if (response.status === 201) alert("Note created!");
                else alert("Failed to make todo.");
                getTodos();
            })
            .catch((err) => alert(err));
    }

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <>
            <div>
                <h2>Todos</h2>

                <form onSubmit={createTodo}>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        required
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                    <br />
                    <input type="submit" value="Submit"></input>
                </form>

                {todos.map((todo) => (
                    <Todo todo={todo} key={todo.id} />
                ))}
            </div>
        </>
    );
}

export default Home;