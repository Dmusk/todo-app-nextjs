// @ts-nocheck
"use client";

import React, { useEffect, useState } from 'react'
import Form from './Form';
import TodoList from './TodoList';

const Container = () => {

    const [todos, setTodos] = useState([]);

    const addTask = (newTodo: any) => {
        setTodos([
            ...todos,
            { ...newTodo, id: todos.length + 1 }
        ]);
        // localStorage.setItem(`taskify_todo_${Math.random()}`);
    };

    const handleDelete = (id: any) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    // useEffect(() => {
    //     window.localStorage.setItem('taskify_todos', JSON.stringify(todos));
    // }, [todos]);

    // useEffect(() => {
    //     const storedTodos = JSON.parse(localStorage.getItem('taskify_todos'));
    //     if (storedTodos) {
    //         setTodos(storedTodos);
    //     }
    // }, []);

    console.log(todos);

    return (
        <div className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto">
            <Form addTask={addTask} />
            <TodoList todos={todos} handleDelete={handleDelete} />
        </div>
    )
}

export default Container;
// export Container;
