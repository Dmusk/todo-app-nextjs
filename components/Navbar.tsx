import React from 'react'

const Navbar = () => {
    return (
        <header className="flex items-center justify-center p-4 bg-gray-100 border-b border-border-gray-200 h-14">
            <div className="flex items-center justify-between w-full">
                <h1 className="text-lg font-semibold text-blue-500">
                    Taskify
                </h1>
                <div className="flex items-center gap-4">
                    <button className="px-4 py-2 text-white bg-blue-500 rounded-md">
                        Login
                    </button>
                    <button className="px-4 py-2 text-black rounded-md hover:bg-gray-200">
                        Sign Up
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Navbar
