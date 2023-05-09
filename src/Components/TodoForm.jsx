import React, { useEffect, useState } from 'react';
import '../Styles/TodoForm.css';

function TodoForm() {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos') || '[]'));

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
        setTodos(storedTodos);
    }, []);

    // Save todos to local storage whenever the state changes
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = () => {
        const taskInput = document.getElementById('input1');
        const descriptionInput = document.getElementById('input2');
        const task = taskInput.value;
        const description = descriptionInput.value;
        if (!task || !description) {
            alert('Enter the data');
        } else {
            const newTodo = { task, description, done: false };
            setTodos([...todos, newTodo]);
            taskInput.value = '';
            descriptionInput.value = '';
        }
    };

    const deleteTask = (index) => {
        const newTodos = todos.filter((task) => !task.done);
        setTodos(newTodos);
    };

    const toggleDone = (index) => {
        const newTodos = [...todos];
        newTodos[index].done = !newTodos[index].done;
        setTodos(newTodos);
        setTimeout(() => deleteTask(index), 1000);
    };

    const DisplayData = () => {
        return (
            <tbody>
            {todos.map((todo, index) => (
                <tr key={index}>
                    <td>{todo.task}</td>
                    <td>{todo.description}</td>
                    <td>
                        <input type="checkbox" checked={todo.done} onChange={() => toggleDone(index)} />
                    </td>
                </tr>
            ))}
            </tbody>
        );
    };

    return (
        <div className="bg">
            <h1>TODOLIST</h1>
            <div className="main">
                <div className="form">
                    <input id="input1" placeholder="Enter the task" />
                    <input id="input2" placeholder="Enter the description" />
                    <button onClick={addTodo}>Add</button>
                </div>
                <div className="table-wrapper">
                    <table className="fl-table">
                        <thead>
                        <tr>
                            <th>Task</th>
                            <th>Description</th>
                            <th>Done</th>
                        </tr>
                        </thead>
                        {DisplayData()}
                    </table>
                </div>
            </div>
        </div>
    );
}

export default TodoForm;