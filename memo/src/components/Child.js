import React, { useState } from 'react';

const Child = ({ todos, addTodo }) => {
    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = () => {
        if (newTodo.trim()) {
            addTodo(newTodo);
            setNewTodo(''); // Clear input
        }
    };

    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>

            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add new todo"
            />
            <button onClick={handleAddTodo}>Add Todo</button>
        </div>
    );
};

export default Child;
