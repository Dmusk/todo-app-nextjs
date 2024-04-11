"use client";

import React, { useState } from 'react'

const Form = ({ addTask }: any) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value);
    };

    const handleSubmit = (e: any) => {
        // NOTE: to add the current date
        // new Date();
        e.preventDefault();
        try {
            addTask({ title, description });
            setTitle("");
            setDescription("");
        } catch (error) {
            console.log("Error adding todo", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-start justify-center w-full max-w-sm mx-auto">
            <div className="flex flex-col items-start w-full">
                <label htmlFor="title" className="w-full">
                    Title
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={title}
                        onChange={handleTitleChange}
                        placeholder="Enter title here"
                        className="w-full h-10 px-4 py-2 mt-1 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </label>
            </div>
            <div className="flex flex-col items-start w-full mt-8">
                <label htmlFor="description" className="w-full">
                    Description
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={description}
                        onChange={handleDescriptionChange}
                        placeholder="Enter description here"
                        className="w-full h-10 px-4 py-2 mt-1 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </label>
            </div>
            <div className="flex items-start justify-start mt-8">
                <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
                    Add Task
                </button>
            </div>
        </form>
    )
}

export default Form
