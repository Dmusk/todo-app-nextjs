import React from 'react';
import { IoMdClose } from "react-icons/io";

const TodoList = ({ todos, handleDelete }: any) => {

    const deleteTodo = (id: any) => {
        try {
            handleDelete(id);
        } catch (error) {
            console.log("Error deleting task", error);
        }
    };

    return (
        <ul className="flex flex-col items-center w-full max-w-sm gap-4 mx-auto my-8 text-start">
            {todos.map((todo: any) => (
                <li key={todo.id} className="flex items-center justify-between w-full p-4 text-sm text-black bg-gray-100 rounded-md">
                    {todo.title}
                    <button
                        onClick={() => deleteTodo(todo.id)}
                        className="p-2 text-red-500 bg-red-100 rounded-md"
                    >
                        <IoMdClose />
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default TodoList
