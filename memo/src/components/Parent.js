import React, { useState, useMemo } from 'react';
import Child from './Child';


const Parent = () => {
    const [counter, setCounter] = useState(0);
    const [todos, setTodos] = useState(['Buy groceries', 'Clean the house']);

    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    };

    // Memoizing the child component to prevent re-rendering when counter changes
    const memoizedChild = useMemo(() => {
        return <Child todos={todos} addTodo={addTodo} />;
    }, [todos]);

    return (
        <div>
            <h2>Parent Component</h2>
            <p>Counter: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>
            
            <h3>Child Component</h3>
            {memoizedChild}
        </div>
    );
};

export default Parent;
