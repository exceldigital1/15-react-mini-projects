import { useState } from "react";

function Todo() {
    const [todoItems, setTodoItems] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const addNewTask = (e) => {

        e.preventDefault();

        if (inputValue.trim() === "") {
            return;
        }
        setTodoItems([...todoItems, { id: Date.now(), text: inputValue, completed: false }]);
        setInputValue("");



    }

    return (
        <main className=" flex flex-col items-center min-h-screen mw-4xl p-4 text-center mx-auto">
            <h2 className="text-2xl font-bold mb-4">Todo App</h2>
            <form onSubmit={addNewTask} className="w-full flex flex-wrap flex-row  p-4">
                <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    type="text"
                    placeholder="Add a new task"
                    className="flex-1 h-10 p-2 border border-gray-300 rounded-l-md rounded-r-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <button
                    type="submit"
                    id="submit"
                    className="h-10 px-4 bg-blue-500 text-white border border-gray-300 border-l-0 rounded-r-md rounded-l-none hover:bg-blue-600"
                >
                    Add
                </button>
            </form>

            <div className="w-full max-w-md text-left">
                <ul className="mt-4 space-y-2 ml-0 list-none">
                    {todoItems.map(item => (
                        <li key={item.id} className="w-full flex justify-between items-center bg-white ">
                            <span className={`flex-1 ${item.completed ? "line-through text-gray-500" : ""}`}>{item.text}</span>
                            <div className="flex gap-2">
                                <button onClick={() => setTodoItems(prev => prev.map(i => i.id === item.id ? { ...i, completed: !i.completed } : i))} className="text-green-500 hover:text-green-700">Completed</button>
                                <button onClick={() => setTodoItems(prev => prev.filter(i => i.id !== item.id))} className="text-red-500 hover:text-red-700">Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}

export default Todo;