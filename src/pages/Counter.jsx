import { useState } from  "react";

function Counter() {
    const [number, setNumber] = useState(0);


    return (
        <main className="flex flex-col justify-center items-center min-h-screen max-w-md p-4 text-center mx-auto">
            <h2 className="text-2xl font-bold mb-4">Counter App</h2>
            <div className="flex justify-center items-center space-x-30">
                <a href="#" onClick={()=> setNumber(number - 1)} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">-</a>
                <p className="text-xl font-semibold">{number}</p>
                <a href="#" onClick={()=> setNumber(number + 1)} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">+</a>
            </div>
            <a href="#" onClick={()=> setNumber(0)} className="mt-10 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Reset</a>
        </main>
    );
}

export default Counter;