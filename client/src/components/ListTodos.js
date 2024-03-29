import React, { Fragment, useEffect, useState } from "react";
// useEffect make a fetch request to our restful apis each time this component is rendered
import EditTodo from "./EditTodo";

// ListTodos component
const ListTodos = () => {
    // Declare a state variable called todos and set it to an empty array
    const [todos, setTodos] = useState([]);

    // deleteTodo function
    const deleteTodo = async (id) => {
        try {
            await fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE",
            });
            setTodos(todos.filter((todo) => todo.todo_id !== id));
            // console.log(deleteTodo);
        } catch (error) {
            console.error(error.message);
        }
    };

    // getTodos function
    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos");
            const jsonData = await response.json();
            setTodos(jsonData);
            // console.log(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    };

    // run getTodos function when component is rendered, only once thanks to the second argument
    useEffect(() => {
        getTodos();
    }, []);

    // console.log(todos);

    return (
        <Fragment>
            {" "}
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                    </tr>*/}
                    {todos.map((todo) => (
                        <tr key={todo.todo_id}>
                            <td>{todo.description}</td>
                            <td>
                                <EditTodo todo={todo} />
                            </td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteTodo(todo.todo_id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
};

export default ListTodos;
