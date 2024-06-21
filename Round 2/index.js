import { useState } from "react";
import { v1 as uuid } from "uuid";
import "./TodoList.css";

function TodoList() {
    const [todos, setTodos] = useState([
        { id: uuid(), task: "task 1", priority: 1, completed: false },
        { id: uuid(), task: "task 21", priority: 2, completed: true },
    ]);

    const create = (newTodo) => {
        console.log(newTodo);
        /*
        // Add the new TODO to the list of TODOs but comment out this code since setTodo takes time to update the state
        // setTodos([...todos, newTodo]);
        @param {Array} todos - List of TODOs
        */
        const latestTodos = [...todos, newTodo];
        sortTodos(latestTodos);
    };

    /*
    // Sort the TODOs based on the priority
    @param {Array} todos - List of TODOs
    */
    const sortTodos = (todos) => {
        setTodos(
            todos.sort((a, b) => {
                return b.priority - a.priority;
            })
        );
    };

    const remove = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const update = (id, updatedTask) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, task: updatedTask };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    return <div>{/* JSX code for rendering the TODO list goes here */}</div>;
}

export default TodoList;
